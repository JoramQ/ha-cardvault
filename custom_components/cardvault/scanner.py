"""Barcode scanning from images for CardVault."""

from __future__ import annotations

import io
import logging
from typing import Any

from homeassistant.core import HomeAssistant

_LOGGER = logging.getLogger(__name__)

# Mapping from pyzbar symbol type names to our BarcodeType values
ZBAR_TO_BARCODE_TYPE: dict[str, str] = {
    "EAN13": "EAN_13",
    "EAN8": "EAN_8",
    "CODE128": "CODE_128",
    "CODE39": "CODE_39",
    "QRCODE": "QR",
    "UPCA": "UPC_A",
}


async def scan_barcode_from_bytes(
    hass: HomeAssistant, image_bytes: bytes
) -> list[dict[str, Any]]:
    """Scan barcodes from image bytes.

    Runs in executor to avoid blocking the event loop.
    Returns a list of dicts with barcode_value and barcode_type.
    """

    def _scan() -> list[dict[str, Any]]:
        from PIL import Image  # noqa: E402
        from pyzbar.pyzbar import ZBarSymbol, decode  # noqa: E402

        supported_symbols = [
            ZBarSymbol.EAN13,
            ZBarSymbol.EAN8,
            ZBarSymbol.CODE128,
            ZBarSymbol.CODE39,
            ZBarSymbol.QRCODE,
            ZBarSymbol.UPCA,
        ]

        img = Image.open(io.BytesIO(image_bytes))
        results = decode(img, symbols=supported_symbols)
        barcodes: list[dict[str, Any]] = []
        for result in results:
            barcode_type = ZBAR_TO_BARCODE_TYPE.get(result.type, result.type)
            try:
                value = result.data.decode("utf-8")
            except UnicodeDecodeError:
                _LOGGER.warning("Could not decode barcode data as UTF-8, skipping")
                continue
            barcodes.append(
                {
                    "barcode_value": value,
                    "barcode_type": barcode_type,
                }
            )
        return barcodes

    return await hass.async_add_executor_job(_scan)
