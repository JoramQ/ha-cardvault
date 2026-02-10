import { LitElement, html, css, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { CardVaultCardConfig, HomeAssistant } from "./types";

@customElement("cardvault-editor")
export class CardVaultEditor extends LitElement {
    static styles = css`
        .form-group {
            margin-bottom: 12px;
        }
        .form-group label {
            display: block;
            font-size: 0.85em;
            font-weight: 500;
            margin-bottom: 4px;
            color: var(--secondary-text-color, #727272);
        }
        .form-group input,
        .form-group select {
            width: 100%;
            padding: 8px 10px;
            border: 1px solid var(--divider-color, #e0e0e0);
            border-radius: 8px;
            font-size: 0.95em;
            background: var(--card-background-color, #fff);
            color: var(--primary-text-color, #212121);
            box-sizing: border-box;
        }
    `;

    @property({ attribute: false }) hass!: HomeAssistant;
    @state() private _config?: CardVaultCardConfig;

    setConfig(config: CardVaultCardConfig): void {
        this._config = config;
    }

    private _valueChanged(field: string, value: string | number): void {
        if (!this._config) return;
        const newConfig = { ...this._config, [field]: value };
        this.dispatchEvent(
            new CustomEvent("config-changed", {
                detail: { config: newConfig },
                bubbles: true,
                composed: true,
            })
        );
    }

    protected render(): TemplateResult {
        if (!this._config) return html``;

        return html`
            <div class="form-group">
                <label>Title</label>
                <input
                    type="text"
                    .value=${this._config.title || ""}
                    @input=${(e: InputEvent) =>
                        this._valueChanged(
                            "title",
                            (e.target as HTMLInputElement).value
                        )}
                    placeholder="My Cards"
                />
            </div>
            <div class="form-group">
                <label>Layout</label>
                <select
                    @change=${(e: Event) =>
                        this._valueChanged(
                            "layout",
                            (e.target as HTMLSelectElement).value
                        )}
                >
                    <option value="default" ?selected=${(this._config.layout || "default") === "default"}>
                        Default (cards)
                    </option>
                    <option value="compact" ?selected=${this._config.layout === "compact"}>
                        Compact (circles)
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label>Columns (0 = auto)</label>
                <input
                    type="number"
                    min="0"
                    max="6"
                    .value=${String(this._config.columns || 0)}
                    @input=${(e: InputEvent) =>
                        this._valueChanged(
                            "columns",
                            parseInt((e.target as HTMLInputElement).value) || 0
                        )}
                />
            </div>
        `;
    }
}
