"""REST API views for CardVault integration."""

from __future__ import annotations

import logging
from pathlib import Path

from aiohttp import web
from homeassistant.components.http import HomeAssistantView
from homeassistant.core import HomeAssistant

from .const import DOMAIN, IMAGES_SUBDIR, MAX_IMAGE_SIZE, BarcodeType
from .scanner import scan_barcode_from_bytes
from .store import CardVaultStore

_LOGGER = logging.getLogger(__name__)


def _get_store(request: web.Request) -> CardVaultStore:
    """Get the store from the request."""
    hass: HomeAssistant = request.app["hass"]
    return hass.data[DOMAIN]["store"]


def _get_images_path(request: web.Request) -> Path:
    """Get the images directory path."""
    hass: HomeAssistant = request.app["hass"]
    return Path(hass.config.path(IMAGES_SUBDIR))


def _validate_card_data(data: dict) -> str | None:
    """Validate card data. Returns error message or None."""
    if not data.get("name"):
        return "name is required"
    if not data.get("barcode_value"):
        return "barcode_value is required"
    if not data.get("barcode_type"):
        return "barcode_type is required"
    try:
        BarcodeType(data["barcode_type"])
    except ValueError:
        valid = [t.value for t in BarcodeType]
        return f"Invalid barcode_type. Must be one of: {valid}"
    return None


class CardListView(HomeAssistantView):
    """Handle /api/cardvault/cards."""

    url = "/api/cardvault/cards"
    name = "api:cardvault:cards"
    requires_auth = True

    async def get(self, request: web.Request) -> web.Response:
        """List all cards."""
        store = _get_store(request)
        return self.json(list(store.cards.values()))

    async def post(self, request: web.Request) -> web.Response:
        """Create a new card."""
        try:
            data = await request.json()
        except ValueError:
            return self.json_message("Invalid JSON", status_code=400)

        error = _validate_card_data(data)
        if error:
            return self.json_message(error, status_code=400)

        store = _get_store(request)
        card = store.create_card(data)
        return self.json(card)


class CardDetailView(HomeAssistantView):
    """Handle /api/cardvault/cards/{card_id}."""

    url = "/api/cardvault/cards/{card_id}"
    name = "api:cardvault:card"
    requires_auth = True

    async def get(self, request: web.Request, card_id: str) -> web.Response:
        """Get a single card."""
        store = _get_store(request)
        card = store.get_card(card_id)
        if card is None:
            return self.json_message("Card not found", status_code=404)
        return self.json(card)

    async def put(self, request: web.Request, card_id: str) -> web.Response:
        """Update a card."""
        store = _get_store(request)
        if store.get_card(card_id) is None:
            return self.json_message("Card not found", status_code=404)

        try:
            data = await request.json()
        except ValueError:
            return self.json_message("Invalid JSON", status_code=400)

        # Validate barcode_type if provided
        if "barcode_type" in data:
            try:
                BarcodeType(data["barcode_type"])
            except ValueError:
                valid = [t.value for t in BarcodeType]
                return self.json_message(
                    f"Invalid barcode_type. Must be one of: {valid}", status_code=400
                )

        card = store.update_card(card_id, data)
        return self.json(card)

    async def delete(self, request: web.Request, card_id: str) -> web.Response:
        """Delete a card and its images."""
        store = _get_store(request)
        card = store.get_card(card_id)
        if card is None:
            return self.json_message("Card not found", status_code=404)

        # Delete associated images
        hass: HomeAssistant = request.app["hass"]
        images_path = Path(hass.config.path(IMAGES_SUBDIR))
        for side in ("front", "back"):
            filename = card.get(f"image_{side}")
            if filename:
                filepath = images_path / filename
                if filepath.is_file():
                    await hass.async_add_executor_job(filepath.unlink)

        store.delete_card(card_id)
        return self.json_message("Card deleted")


class CardImageView(HomeAssistantView):
    """Handle /api/cardvault/cards/{card_id}/image/{side}."""

    url = "/api/cardvault/cards/{card_id}/image/{side}"
    name = "api:cardvault:card:image"
    requires_auth = True

    async def post(
        self, request: web.Request, card_id: str, side: str
    ) -> web.Response:
        """Upload a card image."""
        if side not in ("front", "back"):
            return self.json_message(
                "Side must be 'front' or 'back'", status_code=400
            )

        store = _get_store(request)
        if store.get_card(card_id) is None:
            return self.json_message("Card not found", status_code=404)

        reader = await request.multipart()
        field = await reader.next()
        if field is None or field.name != "file":
            return self.json_message("No file field in upload", status_code=400)

        file_data = await field.read(decode=False)
        if len(file_data) > MAX_IMAGE_SIZE:
            return self.json_message("File too large (max 10 MB)", status_code=400)

        # Determine extension from filename
        original_name = field.filename or "image.jpg"
        ext = Path(original_name).suffix or ".jpg"
        filename = f"{card_id}_{side}{ext}"

        hass: HomeAssistant = request.app["hass"]
        filepath = Path(hass.config.path(IMAGES_SUBDIR)) / filename

        def _write() -> None:
            filepath.write_bytes(file_data)

        await hass.async_add_executor_job(_write)

        store.update_card(card_id, {f"image_{side}": filename})
        return self.json({"filename": filename})

    async def delete(
        self, request: web.Request, card_id: str, side: str
    ) -> web.Response:
        """Delete a card image."""
        if side not in ("front", "back"):
            return self.json_message(
                "Side must be 'front' or 'back'", status_code=400
            )

        store = _get_store(request)
        card = store.get_card(card_id)
        if card is None:
            return self.json_message("Card not found", status_code=404)

        filename = card.get(f"image_{side}")
        if not filename:
            return self.json_message("No image to delete", status_code=404)

        hass: HomeAssistant = request.app["hass"]
        filepath = Path(hass.config.path(IMAGES_SUBDIR)) / filename
        if filepath.is_file():
            await hass.async_add_executor_job(filepath.unlink)

        store.update_card(card_id, {f"image_{side}": None})
        return self.json_message("Image deleted")


class BarcodeScanStatusView(HomeAssistantView):
    """Handle /api/cardvault/scan/status."""

    url = "/api/cardvault/scan/status"
    name = "api:cardvault:scan:status"
    requires_auth = True

    async def get(self, request: web.Request) -> web.Response:
        """Check if barcode scanning is available."""
        hass: HomeAssistant = request.app["hass"]

        def _check() -> bool:
            try:
                from pyzbar.pyzbar import decode  # noqa: F401

                return True
            except ImportError:
                return False

        available = await hass.async_add_executor_job(_check)
        if available:
            return self.json({"available": True})
        return self.json(
            {
                "available": False,
                "reason": "libzbar0 system library is not installed. "
                "Install it with: apt install libzbar0",
            }
        )


class BarcodeScanView(HomeAssistantView):
    """Handle /api/cardvault/scan."""

    url = "/api/cardvault/scan"
    name = "api:cardvault:scan"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        """Upload an image and scan for barcodes."""
        reader = await request.multipart()
        field = await reader.next()
        if field is None or field.name != "file":
            return self.json_message("No file field in upload", status_code=400)

        file_data = await field.read(decode=False)
        if len(file_data) > MAX_IMAGE_SIZE:
            return self.json_message("File too large (max 10 MB)", status_code=400)

        hass: HomeAssistant = request.app["hass"]
        try:
            barcodes = await scan_barcode_from_bytes(hass, file_data)
        except Exception:
            _LOGGER.exception("Error scanning barcode from image")
            return self.json_message(
                "Failed to scan barcode from image", status_code=500
            )

        return self.json({"barcodes": barcodes})


API_VIEWS = [
    CardListView,
    CardDetailView,
    CardImageView,
    BarcodeScanStatusView,
    BarcodeScanView,
]
