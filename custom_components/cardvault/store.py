"""Card storage for CardVault integration."""

from __future__ import annotations

import uuid
from datetime import datetime, timezone
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .const import STORAGE_KEY, STORAGE_VERSION


class CardVaultStore:
    """Manage persistent card storage."""

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialize the store."""
        self._store: Store[dict[str, Any]] = Store(
            hass, STORAGE_VERSION, STORAGE_KEY, atomic_writes=True
        )
        self._data: dict[str, dict[str, Any]] = {}

    async def async_load(self) -> None:
        """Load cards from storage."""
        stored = await self._store.async_load()
        if stored and "cards" in stored:
            self._data = stored["cards"]

    def _save(self) -> None:
        """Schedule a save with batching."""
        self._store.async_delay_save(lambda: {"cards": self._data}, delay=2.0)

    @property
    def cards(self) -> dict[str, dict[str, Any]]:
        """Return a copy of all cards."""
        return dict(self._data)

    def get_card(self, card_id: str) -> dict[str, Any] | None:
        """Get a single card by ID."""
        return self._data.get(card_id)

    def create_card(self, card_data: dict[str, Any]) -> dict[str, Any]:
        """Create a new card and return it."""
        card_id = str(uuid.uuid4())
        now = datetime.now(timezone.utc).isoformat()
        card: dict[str, Any] = {
            "id": card_id,
            "name": card_data["name"],
            "barcode_value": card_data["barcode_value"],
            "barcode_type": card_data["barcode_type"],
            "note": card_data.get("note", ""),
            "image_front": None,
            "image_back": None,
            "color": card_data.get("color", "#607D8B"),
            "tile_background": card_data.get("tile_background", "none"),
            "created_at": now,
            "updated_at": now,
        }
        self._data[card_id] = card
        self._save()
        return card

    def update_card(
        self, card_id: str, updates: dict[str, Any]
    ) -> dict[str, Any] | None:
        """Update an existing card. Returns updated card or None if not found."""
        if card_id not in self._data:
            return None
        allowed = {
            "name",
            "barcode_value",
            "barcode_type",
            "note",
            "color",
            "tile_background",
            "image_front",
            "image_back",
        }
        for key, value in updates.items():
            if key in allowed:
                self._data[card_id][key] = value
        self._data[card_id]["updated_at"] = datetime.now(timezone.utc).isoformat()
        self._save()
        return self._data[card_id]

    def delete_card(self, card_id: str) -> bool:
        """Delete a card. Returns True if found and deleted."""
        if card_id in self._data:
            del self._data[card_id]
            self._save()
            return True
        return False
