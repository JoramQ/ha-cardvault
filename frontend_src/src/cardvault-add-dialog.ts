import { LitElement, html, nothing, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { CardVaultAPI } from "./api-client";
import { dialogStyles } from "./styles";
import type { Card, HomeAssistant } from "./types";

const BARCODE_TYPES = [
    { value: "EAN_13", label: "EAN-13" },
    { value: "EAN_8", label: "EAN-8" },
    { value: "CODE_128", label: "Code 128" },
    { value: "CODE_39", label: "Code 39" },
    { value: "QR", label: "QR Code" },
    { value: "UPC_A", label: "UPC-A" },
];

const DEFAULT_COLORS = [
    "#607D8B",
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#3F51B5",
    "#2196F3",
    "#009688",
    "#4CAF50",
    "#FF9800",
    "#795548",
];

@customElement("cardvault-add-dialog")
export class CardVaultAddDialog extends LitElement {
    static styles = [dialogStyles];

    @property({ attribute: false }) hass!: HomeAssistant;
    @property({ attribute: false }) editCard: Card | null = null;

    @state() private _name = "";
    @state() private _barcodeValue = "";
    @state() private _barcodeType = "EAN_13";
    @state() private _note = "";
    @state() private _color = "#607D8B";
    @state() private _scanning = false;
    @state() private _scanAvailable = true;
    @state() private _scanUnavailableReason = "";
    @state() private _scanResult = "";
    @state() private _scanError = "";
    @state() private _saving = false;
    @state() private _error = "";
    @state() private _frontFile: File | null = null;
    @state() private _backFile: File | null = null;

    connectedCallback(): void {
        super.connectedCallback();
        if (this.editCard) {
            this._name = this.editCard.name;
            this._barcodeValue = this.editCard.barcode_value;
            this._barcodeType = this.editCard.barcode_type;
            this._note = this.editCard.note || "";
            this._color = this.editCard.color || "#607D8B";
        }
    }

    protected firstUpdated(): void {
        this._checkScanAvailability();
    }

    private async _checkScanAvailability(): Promise<void> {
        try {
            const api = new CardVaultAPI(this.hass);
            const status = await api.checkScanAvailable();
            this._scanAvailable = status.available;
            this._scanUnavailableReason = status.reason || "";
        } catch {
            // If the check fails, leave scan enabled (fail open)
        }
    }

    private _handleOverlayClick(e: MouseEvent): void {
        if ((e.target as HTMLElement).classList.contains("dialog-overlay")) {
            this._fireClose();
        }
    }

    private _fireClose(): void {
        this.dispatchEvent(new CustomEvent("close"));
    }

    private async _handleScan(): Promise<void> {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.capture = "environment";
        input.onchange = async () => {
            const file = input.files?.[0];
            if (!file) return;

            this._scanning = true;
            this._scanResult = "";
            this._scanError = "";

            try {
                const api = new CardVaultAPI(this.hass);
                const results = await api.scanBarcode(file);
                if (results.length > 0) {
                    this._barcodeValue = results[0].barcode_value;
                    this._barcodeType = results[0].barcode_type;
                    this._scanResult = `Found ${results[0].barcode_type.replace(/_/g, "-")}: ${results[0].barcode_value}`;
                } else {
                    this._scanError = "No barcode found in image";
                }
            } catch {
                this._scanError = "Failed to scan image";
            } finally {
                this._scanning = false;
            }
        };
        input.click();
    }

    private _handleFileSelect(side: "front" | "back"): void {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = () => {
            const file = input.files?.[0];
            if (!file) return;
            if (side === "front") this._frontFile = file;
            else this._backFile = file;
        };
        input.click();
    }

    private async _handleSave(): Promise<void> {
        if (!this._name.trim()) {
            this._error = "Name is required";
            return;
        }
        if (!this._barcodeValue.trim()) {
            this._error = "Barcode value is required";
            return;
        }

        this._saving = true;
        this._error = "";

        try {
            const api = new CardVaultAPI(this.hass);
            const data = {
                name: this._name.trim(),
                barcode_value: this._barcodeValue.trim(),
                barcode_type: this._barcodeType as Card["barcode_type"],
                note: this._note.trim(),
                color: this._color,
            };

            let card: Card;
            if (this.editCard) {
                card = await api.updateCard(this.editCard.id, data);
            } else {
                card = await api.createCard(data);
            }

            // Upload images if selected
            try {
                if (this._frontFile) {
                    await api.uploadImage(card.id, "front", this._frontFile);
                }
                if (this._backFile) {
                    await api.uploadImage(card.id, "back", this._backFile);
                }
            } catch (imgErr) {
                console.error("CardVault: image upload failed", imgErr);
                this._error = "Card saved but image upload failed";
                this._saving = false;
                this.dispatchEvent(new CustomEvent("saved"));
                return;
            }

            this.dispatchEvent(new CustomEvent("saved"));
        } catch (err) {
            console.error("CardVault: save failed", err);
            this._error = "Failed to save card";
        } finally {
            this._saving = false;
        }
    }

    protected render(): TemplateResult {
        const isEdit = !!this.editCard;

        return html`
            <div class="dialog-overlay" @click=${this._handleOverlayClick}>
                <div class="dialog">
                    <div class="dialog-header">
                        <h2>${isEdit ? "Edit Card" : "Add Card"}</h2>
                        <button class="btn-icon" @click=${this._fireClose}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            </svg>
                        </button>
                    </div>

                    <div class="dialog-body">
                        <div class="form-group">
                            <label>Card Name</label>
                            <input
                                type="text"
                                .value=${this._name}
                                @input=${(e: InputEvent) =>
                                    (this._name = (
                                        e.target as HTMLInputElement
                                    ).value)}
                                placeholder="e.g. Tesco Clubcard"
                            />
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Barcode Value</label>
                                <input
                                    type="text"
                                    .value=${this._barcodeValue}
                                    @input=${(e: InputEvent) =>
                                        (this._barcodeValue = (
                                            e.target as HTMLInputElement
                                        ).value)}
                                    placeholder="e.g. 5012345678901"
                                />
                            </div>
                            <div class="form-group" style="max-width:140px">
                                <label>Type</label>
                                <select
                                    @change=${(e: Event) =>
                                        (this._barcodeType = (
                                            e.target as HTMLSelectElement
                                        ).value)}
                                >
                                    ${BARCODE_TYPES.map(
                                        (t) =>
                                            html`<option
                                                value=${t.value}
                                                ?selected=${this._barcodeType === t.value}
                                            >
                                                ${t.label}
                                            </option>`
                                    )}
                                </select>
                            </div>
                        </div>

                        <div class="scan-section">
                            <p>Or scan barcode from a photo</p>
                            <button
                                class="btn btn-secondary"
                                @click=${this._handleScan}
                                ?disabled=${this._scanning || !this._scanAvailable}
                            >
                                ${this._scanning
                                    ? html`<span class="loading"></span>`
                                    : "Scan from Image"}
                            </button>
                            ${!this._scanAvailable
                                ? html`<p
                                      style="color:var(--secondary-text-color,#727272);font-size:0.8em;margin:4px 0 0"
                                  >
                                      ${this._scanUnavailableReason}
                                  </p>`
                                : nothing}
                            ${this._scanResult
                                ? html`<div class="scan-result">
                                      ${this._scanResult}
                                  </div>`
                                : nothing}
                            ${this._scanError
                                ? html`<div
                                      style="color:var(--error-color,#db4437);font-size:0.95em;margin-top:8px;font-weight:500"
                                  >
                                      ${this._scanError}
                                  </div>`
                                : nothing}
                        </div>

                        <div class="form-group">
                            <label>Note (optional)</label>
                            <textarea
                                .value=${this._note}
                                @input=${(e: InputEvent) =>
                                    (this._note = (
                                        e.target as HTMLTextAreaElement
                                    ).value)}
                                placeholder="Any notes about this card..."
                            ></textarea>
                        </div>

                        <div class="form-group">
                            <label>Color</label>
                            <div style="display:flex;gap:6px;flex-wrap:wrap">
                                ${DEFAULT_COLORS.map(
                                    (c) => html`
                                        <div
                                            @click=${() => (this._color = c)}
                                            style="
                                                width:28px;height:28px;border-radius:50%;
                                                background:${c};cursor:pointer;
                                                border:2px solid ${this._color === c ? "var(--primary-text-color,#212121)" : "transparent"};
                                            "
                                        ></div>
                                    `
                                )}
                                <input
                                    type="color"
                                    .value=${this._color}
                                    @input=${(e: InputEvent) =>
                                        (this._color = (
                                            e.target as HTMLInputElement
                                        ).value)}
                                    style="width:28px;height:28px;padding:0;border:none;border-radius:50%;cursor:pointer"
                                />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Front Image</label>
                                <div class="file-upload">
                                    <button
                                        class="upload-btn"
                                        @click=${() =>
                                            this._handleFileSelect("front")}
                                    >
                                        Choose File
                                    </button>
                                    <span class="file-name">
                                        ${this._frontFile
                                            ? this._frontFile.name
                                            : this.editCard?.image_front
                                              ? "Uploaded"
                                              : "None"}
                                    </span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Back Image</label>
                                <div class="file-upload">
                                    <button
                                        class="upload-btn"
                                        @click=${() =>
                                            this._handleFileSelect("back")}
                                    >
                                        Choose File
                                    </button>
                                    <span class="file-name">
                                        ${this._backFile
                                            ? this._backFile.name
                                            : this.editCard?.image_back
                                              ? "Uploaded"
                                              : "None"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        ${this._error
                            ? html`<p
                                  style="color:var(--error-color,#db4437);font-size:0.85em;margin:8px 0 0"
                              >
                                  ${this._error}
                              </p>`
                            : nothing}
                    </div>

                    <div class="dialog-footer">
                        <button
                            class="btn btn-secondary"
                            @click=${this._fireClose}
                        >
                            Cancel
                        </button>
                        <button
                            class="btn btn-primary"
                            @click=${this._handleSave}
                            ?disabled=${this._saving}
                        >
                            ${this._saving
                                ? html`<span class="loading"></span>`
                                : isEdit
                                  ? "Save"
                                  : "Add Card"}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}
