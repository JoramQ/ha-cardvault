"""Constants for the CardVault integration."""

from __future__ import annotations

import json
from enum import StrEnum
from pathlib import Path
from typing import Final

DOMAIN: Final = "cardvault"
STORAGE_KEY: Final = "cardvault_cards"
STORAGE_VERSION: Final = 1

MANIFEST_PATH = Path(__file__).parent / "manifest.json"
with open(MANIFEST_PATH, encoding="utf-8") as _f:
    INTEGRATION_VERSION: Final[str] = json.load(_f).get("version", "0.0.0")

URL_BASE: Final = "/cardvault"
IMAGES_SUBDIR: Final = "cardvault_images"
MAX_IMAGE_SIZE: Final = 10 * 1024 * 1024  # 10 MB


class BarcodeType(StrEnum):
    """Supported barcode types."""

    EAN_13 = "EAN_13"
    EAN_8 = "EAN_8"
    CODE_128 = "CODE_128"
    CODE_39 = "CODE_39"
    QR = "QR"
    UPC_A = "UPC_A"
