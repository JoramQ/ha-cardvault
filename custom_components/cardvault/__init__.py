"""The CardVault integration."""

from __future__ import annotations

import logging
from pathlib import Path

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import CoreState, Event, HomeAssistant
from homeassistant.const import EVENT_HOMEASSISTANT_STARTED

from .api import API_VIEWS
from .const import DOMAIN, IMAGES_SUBDIR, URL_BASE
from .store import CardVaultStore

_LOGGER = logging.getLogger(__name__)


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up CardVault from configuration.yaml (registers frontend)."""

    async def _register_frontend(_event: Event | None = None) -> None:
        """Register the frontend panel and static paths."""
        from .frontend import async_register_frontend  # noqa: E402

        await async_register_frontend(hass)

        # Register the images directory as a static path
        images_dir = Path(hass.config.path(IMAGES_SUBDIR))
        images_dir.mkdir(exist_ok=True)
        hass.http.register_static_path(
            f"{URL_BASE}/images", str(images_dir), cache_headers=False
        )

    if hass.state is CoreState.running:
        await _register_frontend()
    else:
        hass.bus.async_listen_once(EVENT_HOMEASSISTANT_STARTED, _register_frontend)

    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up CardVault from a config entry."""
    store = CardVaultStore(hass)
    await store.async_load()

    # Ensure images directory exists
    images_dir = Path(hass.config.path(IMAGES_SUBDIR))
    await hass.async_add_executor_job(images_dir.mkdir, True)

    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN]["store"] = store

    # Register API views
    for view_cls in API_VIEWS:
        hass.http.register_view(view_cls())

    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a CardVault config entry."""
    hass.data.pop(DOMAIN, None)
    return True
