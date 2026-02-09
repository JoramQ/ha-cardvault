# CardVault - Home Assistant Integration Plan

> **Status: v1.0.0 - Implementation Complete**
> All phases finished. Ready for testing and deployment.

## Context
HACS-installable Home Assistant custom integration called **CardVault** - a digital wallet for shopping/loyalty/discount cards. Users add cards by manual barcode entry or by uploading a photo (barcode extracted automatically). Cards are displayed in a custom Lovelace dashboard card with tap-to-show-barcode.

---

## Repository Structure

```
ha-cardvault/
├── hacs.json                          # HACS metadata
├── README.md                          # Docs + installation guide
├── LICENSE                            # MIT
│
├── custom_components/cardvault/       # HA integration (Python backend)
│   ├── __init__.py                    # Setup: store init, API registration, frontend registration
│   ├── manifest.json                  # HA manifest (domain, requirements, version)
│   ├── config_flow.py                 # Single-step config flow (no user input needed)
│   ├── const.py                       # Constants (domain, storage keys, URLs, BarcodeType enum)
│   ├── store.py                       # CardVaultStore - CRUD over helpers.storage.Store
│   ├── api.py                         # REST API views (HomeAssistantView subclasses)
│   ├── scanner.py                     # Barcode extraction from images (pyzbar + Pillow)
│   ├── strings.json                   # Config flow UI strings
│   ├── translations/en.json           # English translations
│   └── frontend/
│       ├── __init__.py                # Auto-registers Lovelace resource + static path
│       └── cardvault-card.js          # Compiled frontend bundle (~141KB)
│
└── frontend_src/                      # Frontend source (TypeScript + Lit)
    ├── package.json                   # npm deps: lit, jsbarcode, qrcode, rollup
    ├── package-lock.json              # Locked dependency versions
    ├── rollup.config.mjs              # Bundles to custom_components/cardvault/frontend/
    ├── tsconfig.json                  # useDefineForClassFields: false for Lit decorators
    └── src/
        ├── cardvault-card.ts          # Main Lovelace card (grid of cards, entry point)
        ├── cardvault-detail.ts        # Detail overlay (renders barcode full-size)
        ├── cardvault-add-dialog.ts    # Add/edit card dialog (form + image upload + scan)
        ├── cardvault-editor.ts        # Lovelace card config editor (title, columns)
        ├── barcode-renderer.ts        # JsBarcode (1D) + qrcode (QR) rendering
        ├── api-client.ts              # Typed fetch wrapper for CardVault REST API
        ├── declarations.d.ts          # Type declarations for qrcode module
        ├── styles.ts                  # Shared CSS-in-JS styles (card, dialog, detail)
        └── types.ts                   # TypeScript interfaces (Card, Config, etc.)
```

---

## Data Model

Each card stored in `.storage/cardvault_cards`:

| Field | Type | Description |
|-------|------|-------------|
| `id` | uuid | Auto-generated |
| `name` | string | Card display name (e.g. "Tesco Clubcard") |
| `barcode_value` | string | The barcode number/data |
| `barcode_type` | enum | `EAN_13`, `EAN_8`, `CODE_128`, `CODE_39`, `QR`, `UPC_A` |
| `note` | string | Optional user note |
| `image_front` | string/null | Filename of front card image |
| `image_back` | string/null | Filename of back card image |
| `color` | string | Accent color for UI tile (hex) |
| `created_at` | ISO datetime | Creation timestamp |
| `updated_at` | ISO datetime | Last update timestamp |

Card images stored as files in `<ha_config>/cardvault_images/`, NOT in the JSON store.

---

## REST API Endpoints

All require HA authentication.

| Method | URL | Purpose |
|--------|-----|---------|
| `GET` | `/api/cardvault/cards` | List all cards |
| `POST` | `/api/cardvault/cards` | Create a card |
| `GET` | `/api/cardvault/cards/{id}` | Get single card |
| `PUT` | `/api/cardvault/cards/{id}` | Update a card |
| `DELETE` | `/api/cardvault/cards/{id}` | Delete a card + its images |
| `POST` | `/api/cardvault/cards/{id}/image/{side}` | Upload card image (front/back) |
| `DELETE` | `/api/cardvault/cards/{id}/image/{side}` | Delete card image |
| `POST` | `/api/cardvault/scan` | Upload image, extract barcode |

Static paths:
- `/cardvault/images/<filename>` - Serves card images
- `/cardvault/cardvault-card.js` - Serves compiled frontend JS

---

## Key Backend Modules

### `store.py` - Storage
- Wraps `homeassistant.helpers.storage.Store` with card CRUD methods
- Uses `async_delay_save(delay=2.0)` to batch rapid writes

### `scanner.py` - Barcode Scanning
- Uses `pyzbar` + `Pillow` for local barcode decoding
- Runs in `hass.async_add_executor_job()` to avoid blocking the event loop
- Supports all 6 barcode types

### `api.py` - REST API
- `HomeAssistantView` subclasses for each endpoint group
- Input validation on create/update
- Multipart file upload handling for images

### `__init__.py` - Integration Setup
- `async_setup()`: Registers frontend JS module + images static path
- `async_setup_entry()`: Initializes store, registers API views, creates image directory
- Handles startup timing (checks `CoreState.running` vs `EVENT_HOMEASSISTANT_STARTED`)

### `config_flow.py` - Configuration
- Single-step flow, no user input needed
- Enforces single instance via `async_set_unique_id()`

---

## Frontend Design (Lovelace Card)

**Tech stack**: Lit (LitElement) + JsBarcode + qrcode, bundled with Rollup

### Main card (`cardvault-card.ts`)
- Displays a grid of card tiles with name, color strip, and optional thumbnail
- Floating "+" button to add new cards
- Tap a tile to open detail overlay

### Detail overlay (`cardvault-detail.ts`)
- Renders barcode at full width: SVG for 1D codes (JsBarcode), Canvas for QR
- Shows card name, note, front/back images
- Edit and Delete buttons

### Add/Edit dialog (`cardvault-add-dialog.ts`)
- Form fields: name, barcode number, barcode type dropdown, note, color picker
- Image upload inputs (front/back)
- **"Scan from Image" button**: uploads photo to `/api/cardvault/scan`, auto-fills barcode fields

### Card config editor (`cardvault-editor.ts`)
- Optional settings: title, column count, sort order

### Build output
- Rollup bundles everything into a single `cardvault-card.js` ES module
- Output committed to repo so users don't need Node.js

---

## Implementation Status

### Phase 1: Backend Foundation - DONE
- [x] Directory scaffold + `manifest.json` + `const.py`
- [x] `config_flow.py` + `strings.json` + `translations/en.json`
- [x] `store.py` - Card storage with full CRUD
- [x] `scanner.py` - Barcode extraction from images
- [x] `api.py` - All REST API views (4 view classes, 8 endpoints)
- [x] `__init__.py` - Wire everything together

### Phase 2: Frontend - DONE
- [x] `frontend_src/` tooling (package.json, rollup, tsconfig)
- [x] `types.ts` + `api-client.ts` + `declarations.d.ts`
- [x] `barcode-renderer.ts` (JsBarcode for 1D, qrcode for QR)
- [x] `cardvault-card.ts` - Main grid card with empty state
- [x] `cardvault-detail.ts` - Detail overlay with barcode display
- [x] `cardvault-add-dialog.ts` - Add/edit form with scan-from-image
- [x] `cardvault-editor.ts` - Config editor (title, columns)
- [x] `styles.ts` - Shared styles (card, dialog, detail)
- [x] Build bundle - clean compile, ~141KB output

### Phase 3: Integration Glue - DONE
- [x] `frontend/__init__.py` - Auto-registers Lovelace resource in storage mode
- [x] `__init__.py` - Frontend registration + images static path (startup-timing-aware)

### Phase 4: Release Files - DONE
- [x] `hacs.json`
- [x] `README.md` (installation, usage, prerequisites)
- [x] `LICENSE` (MIT)

### Phase 5: Remaining TODO
- [ ] Test in a live Home Assistant instance
- [ ] Add `.gitignore` and initialize git repo
- [ ] Set GitHub username in `manifest.json` codeowners
- [ ] Set repository URLs in `manifest.json`
- [ ] Add screenshots to README

---

## Key Architectural Decisions

| Decision | Choice | Why |
|----------|--------|-----|
| Storage | `helpers.storage.Store` | Native HA pattern, atomic writes, batched saves |
| Images | Filesystem (`cardvault_images/`) | Keeps JSON store small, served via static path |
| Barcode scan | `pyzbar` + `Pillow` in executor | Local-only, non-blocking, no cloud dependency |
| Frontend | Lit + Rollup bundle | HA standard, single self-contained JS file |
| Frontend delivery | Embedded via JSModuleRegistration | Auto-registers, no manual Lovelace resource setup |
| HACS type | Integration | Contains both Python backend + bundled JS frontend |

---

## Prerequisites / Notes
- `libzbar0` system library required for barcode scanning (documented in README)
- The compiled `cardvault-card.js` is committed to the repo (users don't need Node.js)
- `manifest.json` requirements: `pyzbar>=0.1.9`, `Pillow>=10.0.0`

## Verification
1. Install integration via HACS (or manually copy `custom_components/cardvault/`)
2. Add integration in HA Settings > Integrations > "CardVault"
3. Add a `custom:cardvault-card` to a dashboard
4. Test: add card manually (enter barcode), verify barcode renders correctly
5. Test: add card by uploading a photo, verify barcode is extracted
6. Test: upload front/back card images, verify they display
7. Test: edit and delete cards
8. Test: restart HA, verify all data persists
