"""Config flow for CardVault integration."""

from __future__ import annotations

from homeassistant.config_entries import ConfigFlow

from .const import DOMAIN


class CardVaultConfigFlow(ConfigFlow, domain=DOMAIN):
    """Handle a config flow for CardVault."""

    VERSION = 1

    async def async_step_user(self, user_input=None):
        """Handle the initial step."""
        await self.async_set_unique_id(DOMAIN)
        self._abort_if_unique_id_configured()
        return self.async_create_entry(title="CardVault", data={})
