import type { Card, BarcodeResult, HomeAssistant } from "./types";

export class CardVaultAPI {
    private hass: HomeAssistant;

    constructor(hass: HomeAssistant) {
        this.hass = hass;
    }

    async getLogos(): Promise<string[]> {
        const resp = await this.hass.fetchWithAuth("/api/cardvault/logos");
        if (!resp.ok) throw new Error(`Failed to fetch logos: ${resp.status}`);
        return resp.json();
    }

    async getCards(): Promise<Card[]> {
        const resp = await this.hass.fetchWithAuth("/api/cardvault/cards");
        if (!resp.ok) throw new Error(`Failed to fetch cards: ${resp.status}`);
        return resp.json();
    }

    async createCard(data: Partial<Card>): Promise<Card> {
        const resp = await this.hass.fetchWithAuth("/api/cardvault/cards", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!resp.ok) throw new Error(`Failed to create card: ${resp.status}`);
        return resp.json();
    }

    async updateCard(id: string, data: Partial<Card>): Promise<Card> {
        const resp = await this.hass.fetchWithAuth(
            `/api/cardvault/cards/${id}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            }
        );
        if (!resp.ok) throw new Error(`Failed to update card: ${resp.status}`);
        return resp.json();
    }

    async deleteCard(id: string): Promise<void> {
        const resp = await this.hass.fetchWithAuth(
            `/api/cardvault/cards/${id}`,
            { method: "DELETE" }
        );
        if (!resp.ok) throw new Error(`Failed to delete card: ${resp.status}`);
    }

    async uploadImage(
        cardId: string,
        side: "front" | "back",
        file: File
    ): Promise<{ filename: string }> {
        const formData = new FormData();
        formData.append("file", file);
        const resp = await this.hass.fetchWithAuth(
            `/api/cardvault/cards/${cardId}/image/${side}`,
            { method: "POST", body: formData }
        );
        if (!resp.ok) throw new Error(`Failed to upload image: ${resp.status}`);
        return resp.json();
    }

    async deleteImage(cardId: string, side: "front" | "back"): Promise<void> {
        const resp = await this.hass.fetchWithAuth(
            `/api/cardvault/cards/${cardId}/image/${side}`,
            { method: "DELETE" }
        );
        if (!resp.ok)
            throw new Error(`Failed to delete image: ${resp.status}`);
    }

    async checkScanAvailable(): Promise<{
        available: boolean;
        reason?: string;
    }> {
        const resp = await this.hass.fetchWithAuth(
            "/api/cardvault/scan/status"
        );
        if (!resp.ok)
            throw new Error(`Failed to check scan status: ${resp.status}`);
        return resp.json();
    }

    async scanBarcode(file: File): Promise<BarcodeResult[]> {
        const formData = new FormData();
        formData.append("file", file);
        const resp = await this.hass.fetchWithAuth("/api/cardvault/scan", {
            method: "POST",
            body: formData,
        });
        if (!resp.ok) throw new Error(`Failed to scan barcode: ${resp.status}`);
        const data = await resp.json();
        return data.barcodes;
    }
}
