import JsBarcode from "jsbarcode";
import QRCode from "qrcode";

const FORMAT_MAP: Record<string, string> = {
    EAN_13: "EAN13",
    EAN_8: "EAN8",
    CODE_128: "CODE128",
    CODE_39: "CODE39",
    UPC_A: "UPC",
};

export function render1DBarcode(
    svgElement: SVGSVGElement,
    value: string,
    barcodeType: string
): boolean {
    const format = FORMAT_MAP[barcodeType];
    if (!format) return false;

    try {
        JsBarcode(svgElement, value, {
            format,
            displayValue: true,
            fontSize: 16,
            margin: 10,
            width: 2,
            height: 80,
            background: "#ffffff",
            lineColor: "#000000",
        });
        return true;
    } catch {
        return false;
    }
}

export async function renderQRCode(
    canvas: HTMLCanvasElement,
    value: string
): Promise<boolean> {
    try {
        await QRCode.toCanvas(canvas, value, {
            width: 256,
            margin: 2,
            color: {
                dark: "#000000",
                light: "#ffffff",
            },
        });
        return true;
    } catch {
        return false;
    }
}

export function isQRCode(barcodeType: string): boolean {
    return barcodeType === "QR";
}
