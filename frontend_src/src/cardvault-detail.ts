import { LitElement, html, nothing, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { render1DBarcode, renderQRCode, isQRCode } from "./barcode-renderer";
import { detailStyles, dialogStyles } from "./styles";
import type { Card, HomeAssistant } from "./types";

@customElement("cardvault-detail")
export class CardVaultDetail extends LitElement {
    static styles = [detailStyles, dialogStyles];

    @property({ attribute: false }) hass!: HomeAssistant;
    @property({ attribute: false }) card!: Card;

    @state() private _barcodeError = false;
    @state() private _fullscreenImage: string | null = null;

    protected updated(changed: Map<string, unknown>): void {
        if (changed.has("card") && this.card) {
            this._renderBarcode();
        }
    }

    private async _renderBarcode(): Promise<void> {
        this._barcodeError = false;
        await this.updateComplete;

        if (isQRCode(this.card.barcode_type)) {
            const canvas = this.renderRoot.querySelector(
                ".barcode-canvas"
            ) as HTMLCanvasElement | null;
            if (canvas) {
                const ok = await renderQRCode(canvas, this.card.barcode_value);
                if (!ok) this._barcodeError = true;
            }
        } else {
            const svg = this.renderRoot.querySelector(
                ".barcode-svg"
            ) as SVGSVGElement | null;
            if (svg) {
                const ok = render1DBarcode(
                    svg,
                    this.card.barcode_value,
                    this.card.barcode_type
                );
                if (!ok) this._barcodeError = true;
            }
        }
    }

    private _fireClose(): void {
        this.dispatchEvent(new CustomEvent("close"));
    }

    private _fireEdit(): void {
        this.dispatchEvent(new CustomEvent("edit", { detail: this.card }));
    }

    private _fireDelete(): void {
        this.dispatchEvent(new CustomEvent("delete", { detail: this.card }));
    }

    private _handleOverlayClick(e: MouseEvent): void {
        if ((e.target as HTMLElement).classList.contains("detail-overlay")) {
            this._fireClose();
        }
    }

    protected render(): TemplateResult {
        const c = this.card;

        return html`
            <div class="detail-overlay" @click=${this._handleOverlayClick}>
                <div class="detail-card">
                    <div class="detail-header">
                        <h2>${c.name}</h2>
                        <div class="actions">
                            <button
                                class="btn-icon"
                                @click=${this._fireEdit}
                                title="Edit"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                </svg>
                            </button>
                            <button
                                class="btn-icon"
                                @click=${this._fireDelete}
                                title="Delete"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                </svg>
                            </button>
                            <button
                                class="btn-icon"
                                @click=${this._fireClose}
                                title="Close"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="barcode-container">
                        ${this._barcodeError
                            ? html`<p style="color:var(--error-color,#db4437)">
                                  Could not render barcode
                              </p>`
                            : isQRCode(c.barcode_type)
                              ? html`<canvas class="barcode-canvas"></canvas>`
                              : html`<svg class="barcode-svg"></svg>`}
                    </div>

                    <div class="detail-info">
                        <div class="info-row">
                            <span class="info-label">Value</span>
                            <span>${c.barcode_value}</span>
                        </div>
                    </div>

                    ${c.note
                        ? html`<div class="detail-note">${c.note}</div>`
                        : nothing}
                    ${c.image_front || c.image_back
                        ? html`
                              <div class="detail-images">
                                  ${c.image_front
                                      ? html`<img
                                            src="/cardvault/images/${c.image_front}"
                                            alt="Card front"
                                            style="cursor:pointer"
                                            @click=${() => (this._fullscreenImage = `/cardvault/images/${c.image_front}`)}
                                        />`
                                      : nothing}
                                  ${c.image_back
                                      ? html`<img
                                            src="/cardvault/images/${c.image_back}"
                                            alt="Card back"
                                            style="cursor:pointer"
                                            @click=${() => (this._fullscreenImage = `/cardvault/images/${c.image_back}`)}
                                        />`
                                      : nothing}
                              </div>
                          `
                        : nothing}
                </div>
            </div>
            ${this._fullscreenImage
                ? html`
                      <div
                          style="position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;cursor:pointer"
                          @click=${() => (this._fullscreenImage = null)}
                      >
                          <img
                              src=${this._fullscreenImage}
                              style="max-width:90vw;max-height:90vh;object-fit:contain;border-radius:8px"
                          />
                      </div>
                  `
                : nothing}
        `;
    }
}
