"""Frontend registration for CardVault."""

from __future__ import annotations

import logging
from pathlib import Path

from homeassistant.components.frontend import async_register_built_in_panel
from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant

from ..const import DOMAIN, INTEGRATION_VERSION, URL_BASE

_LOGGER = logging.getLogger(__name__)

FRONTEND_DIR = Path(__file__).parent
JS_FILENAME = "cardvault-card.js"
JS_URL = f"{URL_BASE}/{JS_FILENAME}"


async def async_register_frontend(hass: HomeAssistant) -> None:
    """Register the frontend static path and Lovelace resource."""
    # Register the frontend directory as a static path
    await hass.http.async_register_static_paths(
        [
            StaticPathConfig(
                url_path=URL_BASE,
                path=str(FRONTEND_DIR),
                cache_headers=False,
            )
        ]
    )

    # Auto-register as a Lovelace resource (storage mode)
    await _register_lovelace_resource(hass)


async def _register_lovelace_resource(hass: HomeAssistant) -> None:
    """Register the JS module as a Lovelace resource if using storage mode."""
    # Only works in storage mode (the default for most HA installs)
    try:
        from homeassistant.components.lovelace import (  # type: ignore[attr-defined]
            ResourceStorageCollection,
        )
        from homeassistant.components.lovelace.const import (  # type: ignore[attr-defined]
            RESOURCE_TYPE_MODULE,
        )
    except ImportError:
        _LOGGER.debug("Lovelace resource registration not available")
        return

    resources: ResourceStorageCollection | None = None

    # Access the lovelace resource collection
    lovelace_data = hass.data.get("lovelace")
    if lovelace_data is None:
        _LOGGER.debug("Lovelace data not available")
        return

    # Try to get resources from the lovelace data
    if hasattr(lovelace_data, "resources"):
        res = lovelace_data.resources
        if isinstance(res, ResourceStorageCollection):
            resources = res

    if resources is None:
        _LOGGER.debug("Lovelace resources collection not available (YAML mode?)")
        return

    # Ensure loaded
    if not resources.loaded:
        await resources.async_load()

    resource_url = f"{JS_URL}?v={INTEGRATION_VERSION}"

    # Check if already registered
    for item in resources.async_items():
        if item.get("url", "").startswith(JS_URL):
            # Update version if changed
            if item.get("url") != resource_url:
                await resources.async_update_item(
                    item["id"],
                    {"url": resource_url, "res_type": RESOURCE_TYPE_MODULE},
                )
                _LOGGER.info("Updated CardVault Lovelace resource to %s", resource_url)
            return

    # Register new resource
    await resources.async_create_item(
        {"url": resource_url, "res_type": RESOURCE_TYPE_MODULE}
    )
    _LOGGER.info("Registered CardVault Lovelace resource: %s", resource_url)
