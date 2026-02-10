import { LitElement, html, nothing, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { CardVaultAPI } from "./api-client";
import { cardStyles, dialogStyles } from "./styles";
import type { Card, CardVaultCardConfig, HomeAssistant } from "./types";

// Import side effects - registers custom elements
import "./cardvault-detail";
import "./cardvault-add-dialog";
import "./cardvault-editor";

@customElement("cardvault-card")
export class CardVaultCard extends LitElement {
    static styles = [cardStyles, dialogStyles];

    @state() private _config?: CardVaultCardConfig;
    @state() private _cards: Card[] = [];
    @state() private _selectedCard: Card | null = null;
    @state() private _showAdd = false;
    @state() private _editCard: Card | null = null;
    @state() private _confirmDelete: Card | null = null;
    @state() private _loading = true;

    private _api?: CardVaultAPI;
    private _hass?: HomeAssistant;

    setConfig(config: CardVaultCardConfig): void {
        this._config = config;
    }

    set hass(hass: HomeAssistant) {
        const oldHass = this._hass;
        this._hass = hass;
        if (!oldHass && hass) {
            this._api = new CardVaultAPI(hass);
            this._loadCards();
        }
        this.requestUpdate("hass", oldHass);
    }

    get hass(): HomeAssistant {
        return this._hass!;
    }

    static getConfigElement(): HTMLElement {
        return document.createElement("cardvault-editor");
    }

    static getStubConfig(): CardVaultCardConfig {
        return { type: "custom:cardvault-card", title: "My Cards" };
    }

    getCardSize(): number {
        return 3;
    }

    private async _loadCards(): Promise<void> {
        if (!this._api) return;
        try {
            this._cards = await this._api.getCards();
        } catch {
            this._cards = [];
        } finally {
            this._loading = false;
        }
    }

    private _handleCardClick(card: Card): void {
        this._selectedCard = card;
    }

    private _handleAddClick(): void {
        this._editCard = null;
        this._showAdd = true;
    }

    private _handleDetailClose(): void {
        this._selectedCard = null;
    }

    private _handleDetailEdit(e: CustomEvent): void {
        this._selectedCard = null;
        this._editCard = e.detail;
        this._showAdd = true;
    }

    private _handleDetailDelete(e: CustomEvent): void {
        this._selectedCard = null;
        this._confirmDelete = e.detail;
    }

    private async _handleConfirmDelete(): Promise<void> {
        if (!this._confirmDelete || !this._api) return;
        try {
            await this._api.deleteCard(this._confirmDelete.id);
            this._confirmDelete = null;
            await this._loadCards();
        } catch {
            // Keep dialog open on error
        }
    }

    private _handleDialogClose(): void {
        this._showAdd = false;
        this._editCard = null;
    }

    private async _handleDialogSaved(): Promise<void> {
        this._showAdd = false;
        this._editCard = null;
        await this._loadCards();
    }

    protected render(): TemplateResult {
        const title = this._config?.title || "My Cards";
        const columns = this._config?.columns;
        const gridStyle = columns
            ? `grid-template-columns: repeat(${columns}, 1fr)`
            : "";

        return html`
            <ha-card>
                <div class="card-header">
                    <h1>${title}</h1>
                </div>

                ${this._loading
                    ? html`<div class="empty-state">
                          <span class="loading"></span>
                      </div>`
                    : this._cards.length === 0
                      ? html`
                            <div class="empty-state">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" opacity="0.4">
                                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                                </svg>
                                <p>No cards yet</p>
                                <button
                                    class="btn btn-primary"
                                    style="margin-top:12px"
                                    @click=${this._handleAddClick}
                                >
                                    Add Your First Card
                                </button>
                            </div>
                        `
                      : html`
                            <div class="card-grid" style=${gridStyle}>
                                ${this._cards.map(
                                    (card) => {
                                        const bgImage =
                                            card.tile_background === "front" && card.image_front
                                                ? card.image_front
                                                : card.tile_background === "back" && card.image_back
                                                  ? card.image_back
                                                  : null;
                                        const tileStyle = bgImage
                                            ? `background:${card.color || "#607D8B"} url(/cardvault/images/${bgImage}) center/cover`
                                            : `background:${card.color || "#607D8B"}`;
                                        return html`
                                            <div
                                                class="card-tile"
                                                style=${tileStyle}
                                                @click=${() =>
                                                    this._handleCardClick(card)}
                                            >
                                                <span class="tile-name"
                                                    >${card.name}</span
                                                >
                                                <span class="tile-type"
                                                    >${card.barcode_type.replace(/_/g, "-")}</span
                                                >
                                            </div>
                                        `;
                                    }
                                )}
                                <button
                                    class="add-btn"
                                    @click=${this._handleAddClick}
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                    </svg>
                                    Add Card
                                </button>
                            </div>
                        `}
            </ha-card>

            ${this._selectedCard
                ? html`
                      <cardvault-detail
                          .hass=${this.hass}
                          .card=${this._selectedCard}
                          @close=${this._handleDetailClose}
                          @edit=${this._handleDetailEdit}
                          @delete=${this._handleDetailDelete}
                      ></cardvault-detail>
                  `
                : nothing}
            ${this._showAdd
                ? html`
                      <cardvault-add-dialog
                          .hass=${this.hass}
                          .editCard=${this._editCard}
                          @close=${this._handleDialogClose}
                          @saved=${this._handleDialogSaved}
                      ></cardvault-add-dialog>
                  `
                : nothing}
            ${this._confirmDelete
                ? html`
                      <div
                          class="dialog-overlay"
                          @click=${(e: MouseEvent) => {
                              if (
                                  (
                                      e.target as HTMLElement
                                  ).classList.contains("dialog-overlay")
                              )
                                  this._confirmDelete = null;
                          }}
                      >
                          <div class="dialog" style="max-width:340px">
                              <div class="dialog-header">
                                  <h2>Delete Card</h2>
                              </div>
                              <div class="dialog-body">
                                  <p>
                                      Delete
                                      <strong
                                          >${this._confirmDelete.name}</strong
                                      >? This cannot be undone.
                                  </p>
                              </div>
                              <div class="dialog-footer">
                                  <button
                                      class="btn btn-secondary"
                                      @click=${() =>
                                          (this._confirmDelete = null)}
                                  >
                                      Cancel
                                  </button>
                                  <button
                                      class="btn btn-danger"
                                      @click=${this._handleConfirmDelete}
                                  >
                                      Delete
                                  </button>
                              </div>
                          </div>
                      </div>
                  `
                : nothing}
        `;
    }
}

// Register with the HA card picker
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
    type: "cardvault-card",
    name: "CardVault",
    description: "Digital wallet for loyalty and discount cards",
    preview: true,
});
