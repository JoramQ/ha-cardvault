#!/usr/bin/env python3
"""Fetch company logos from websites for CardVault.

Tries multiple common icon locations for each domain and saves the best
quality logo it can find as a PNG file.

Usage:
    python scripts/fetch_logos.py                  # fetch all logos
    python scripts/fetch_logos.py --skip-existing  # skip already downloaded
    python scripts/fetch_logos.py --output ./logos  # custom output directory
"""

import argparse
import io
import re
import sys
from pathlib import Path
from urllib.parse import urljoin

import requests
import yaml
from PIL import Image

SCRIPT_DIR = Path(__file__).parent
DEFAULT_CONFIG = SCRIPT_DIR / "logos.yaml"
DEFAULT_OUTPUT = (
    SCRIPT_DIR.parent / "custom_components" / "cardvault" / "logos"
)

TIMEOUT = (5, 10)  # (connect timeout, read timeout) in seconds
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}


def fetch_url(url: str) -> requests.Response | None:
    """Fetch a URL, returning the response or None on failure."""
    try:
        resp = requests.get(url, headers=HEADERS, timeout=TIMEOUT, allow_redirects=True)
        if resp.status_code == 200 and len(resp.content) > 0:
            return resp
    except requests.RequestException:
        pass
    return None


def try_direct_icon(domain: str, path: str) -> bytes | None:
    """Try fetching a direct icon path from the domain."""
    url = f"https://{domain}/{path.lstrip('/')}"
    resp = fetch_url(url)
    if resp and is_image(resp.content):
        return resp.content
    # Also try www. subdomain
    url = f"https://www.{domain}/{path.lstrip('/')}"
    resp = fetch_url(url)
    if resp and is_image(resp.content):
        return resp.content
    return None


def is_image(data: bytes) -> bool:
    """Check if the data is a valid image."""
    try:
        img = Image.open(io.BytesIO(data))
        img.verify()
        return True
    except Exception:
        return False


def get_image_size(data: bytes) -> tuple[int, int]:
    """Get image dimensions."""
    try:
        img = Image.open(io.BytesIO(data))
        return img.size
    except Exception:
        return (0, 0)


def parse_icons_from_html(domain: str) -> list[tuple[str, int]]:
    """Parse HTML for icon links, return list of (url, size) tuples."""
    from html.parser import HTMLParser

    icons: list[tuple[str, int]] = []

    class IconParser(HTMLParser):
        def handle_starttag(self, tag, attrs):
            if tag != "link":
                return
            attr_dict = dict(attrs)
            rel = attr_dict.get("rel", "").lower()
            href = attr_dict.get("href", "")
            if not href:
                return
            if any(
                keyword in rel
                for keyword in ["icon", "apple-touch-icon", "shortcut"]
            ):
                # Try to get size from sizes attribute
                sizes = attr_dict.get("sizes", "")
                size = 0
                match = re.match(r"(\d+)x(\d+)", sizes)
                if match:
                    size = int(match.group(1))
                # apple-touch-icon gets a priority boost
                if "apple-touch-icon" in rel:
                    size = max(size, 150)
                icons.append((href, size))

    for prefix in [f"https://{domain}", f"https://www.{domain}"]:
        resp = fetch_url(prefix)
        if not resp:
            continue
        try:
            parser = IconParser()
            parser.feed(resp.text)
        except Exception:
            continue
        if icons:
            break

    # Resolve relative URLs
    base_url = f"https://{domain}"
    resolved = []
    for href, size in icons:
        if href.startswith("//"):
            href = "https:" + href
        elif href.startswith("/"):
            href = urljoin(base_url, href)
        elif not href.startswith("http"):
            href = urljoin(base_url + "/", href)
        resolved.append((href, size))

    # Sort by size descending (largest first)
    resolved.sort(key=lambda x: x[1], reverse=True)
    return resolved


def fetch_logo(domain: str) -> bytes | None:
    """Try to fetch the best logo for a domain.

    Strategy (in order):
    1. /apple-touch-icon.png (typically 180x180)
    2. /apple-touch-icon-precomposed.png
    3. Parse HTML for icon links (pick largest)
    4. /favicon.ico (fallback)
    """
    # Strategy 1 & 2: Direct apple-touch-icon paths
    for path in ["apple-touch-icon.png", "apple-touch-icon-precomposed.png"]:
        data = try_direct_icon(domain, path)
        if data:
            w, h = get_image_size(data)
            if w >= 64 and h >= 64:
                return data

    # Strategy 3: Parse HTML for icon links
    icons = parse_icons_from_html(domain)
    best_data = None
    best_size = 0
    for url, declared_size in icons:
        resp = fetch_url(url)
        if not resp or not is_image(resp.content):
            continue
        w, h = get_image_size(resp.content)
        actual_size = max(w, h)
        if actual_size > best_size:
            best_data = resp.content
            best_size = actual_size
        # If we found something large enough, stop
        if best_size >= 128:
            break
    if best_data and best_size >= 32:
        return best_data

    # Strategy 4: favicon.ico fallback
    for path in ["favicon.ico"]:
        data = try_direct_icon(domain, path)
        if data:
            return data

    # Also try apple-touch-icon even if small
    for path in ["apple-touch-icon.png", "apple-touch-icon-precomposed.png"]:
        data = try_direct_icon(domain, path)
        if data:
            return data

    return None


def convert_to_png(data: bytes) -> bytes:
    """Convert image data to PNG format."""
    img = Image.open(io.BytesIO(data))

    # For ICO files, pick the largest embedded frame
    if img.format == "ICO":
        best = img
        best_pixels = img.size[0] * img.size[1]
        for i in range(getattr(img, "n_frames", 1)):
            img.seek(i)
            pixels = img.size[0] * img.size[1]
            if pixels > best_pixels:
                best = img.copy()
                best_pixels = pixels
        img = best

    # Convert to RGBA for PNG
    if img.mode not in ("RGBA", "RGB"):
        img = img.convert("RGBA")

    buf = io.BytesIO()
    img.save(buf, format="PNG")
    return buf.getvalue()


def main():
    parser = argparse.ArgumentParser(
        description="Fetch company logos from websites for CardVault"
    )
    parser.add_argument(
        "--config",
        type=Path,
        default=DEFAULT_CONFIG,
        help=f"Path to logos.yaml config file (default: {DEFAULT_CONFIG})",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT,
        help=f"Output directory for logos (default: {DEFAULT_OUTPUT})",
    )
    parser.add_argument(
        "--skip-existing",
        action="store_true",
        help="Skip logos that already exist in the output directory",
    )
    args = parser.parse_args()

    # Load config
    if not args.config.exists():
        print(f"Error: Config file not found: {args.config}")
        sys.exit(1)

    with open(args.config) as f:
        config = yaml.safe_load(f)

    logos = config.get("logos", [])
    if not logos:
        print("No logos configured in config file.")
        sys.exit(0)

    # Ensure output directory exists
    args.output.mkdir(parents=True, exist_ok=True)

    print(f"Fetching {len(logos)} logos...")
    print(f"Output: {args.output}\n")

    success = 0
    failed = 0
    skipped = 0

    for entry in logos:
        domain = entry["domain"]
        name = entry["name"]
        output_file = args.output / f"logo_{name}.png"

        if args.skip_existing and output_file.exists():
            print(f"  SKIP  {name} ({domain}) - already exists")
            skipped += 1
            continue

        print(f"  FETCH {name} ({domain})...", end=" ", flush=True)

        try:
            data = fetch_logo(domain)
            if data:
                png_data = convert_to_png(data)
                output_file.write_bytes(png_data)
                w, h = get_image_size(png_data)
                print(f"OK ({w}x{h})")
                success += 1
            else:
                print("FAILED - no icon found")
                failed += 1
        except Exception as e:
            print(f"FAILED - {e}")
            failed += 1

    print(f"\nDone: {success} downloaded, {failed} failed, {skipped} skipped")


if __name__ == "__main__":
    main()
