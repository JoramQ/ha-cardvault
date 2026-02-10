export interface Card {
    id: string;
    name: string;
    barcode_value: string;
    barcode_type: "EAN_13" | "EAN_8" | "CODE_128" | "CODE_39" | "QR" | "UPC_A";
    note: string;
    image_front: string | null;
    image_back: string | null;
    logo: string | null;
    color: string;
    tile_background: "none" | "front" | "back" | "logo";
    created_at: string;
    updated_at: string;
}

export interface CardVaultCardConfig {
    type: string;
    title?: string;
    columns?: number;
    layout?: "default" | "compact";
}

export interface BarcodeResult {
    barcode_value: string;
    barcode_type: string;
}

export interface HomeAssistant {
    auth: {
        data: {
            access_token: string;
        };
    };
    fetchWithAuth: (path: string, init?: RequestInit) => Promise<Response>;
    callWS: (msg: Record<string, unknown>) => Promise<unknown>;
    language: string;
}
