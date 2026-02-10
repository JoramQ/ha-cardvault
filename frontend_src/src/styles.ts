import { css } from "lit";

export const cardStyles = css`
    :host {
        --cv-primary: var(--primary-color, #03a9f4);
        --cv-bg: var(--card-background-color, #fff);
        --cv-text: var(--primary-text-color, #212121);
        --cv-text-secondary: var(--secondary-text-color, #727272);
        --cv-divider: var(--divider-color, #e0e0e0);
        --cv-radius: 12px;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 16px 8px;
    }

    .card-header h1 {
        margin: 0;
        font-size: 1.2em;
        font-weight: 500;
        color: var(--cv-text);
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 12px;
        padding: 8px 16px 16px;
    }

    .card-tile {
        position: relative;
        border-radius: var(--cv-radius);
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
        aspect-ratio: 1.2;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 10px;
        color: #fff;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }

    .card-tile:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }

    .card-tile:active {
        transform: scale(0.97);
    }

    .card-tile .tile-name {
        font-weight: 600;
        font-size: 0.9em;
        line-height: 1.2;
        word-break: break-word;
    }

    .card-tile .tile-type {
        font-size: 0.7em;
        opacity: 0.85;
        margin-top: 2px;
    }

    .card-tile .tile-logo {
        position: absolute;
        top: 8px;
        left: 8px;
        width: 28px;
        height: 28px;
        border-radius: 6px;
        object-fit: contain;
        background: rgba(255, 255, 255, 0.85);
        padding: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .add-btn {
        position: relative;
        border-radius: var(--cv-radius);
        overflow: hidden;
        cursor: pointer;
        aspect-ratio: 1.2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px dashed var(--cv-divider);
        background: transparent;
        color: var(--cv-text-secondary);
        font-size: 0.9em;
        transition: border-color 0.15s ease, color 0.15s ease;
    }

    .add-btn:hover {
        border-color: var(--cv-primary);
        color: var(--cv-primary);
    }

    .add-btn svg {
        width: 32px;
        height: 32px;
        margin-bottom: 4px;
    }

    .compact-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        padding: 8px 16px 16px;
        align-items: center;
    }

    .compact-circle {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 700;
        font-size: 0.85em;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        user-select: none;
    }

    .compact-circle:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }

    .compact-circle:active {
        transform: scale(0.95);
    }

    .compact-add {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dashed var(--cv-divider);
        background: transparent;
        color: var(--cv-text-secondary);
        cursor: pointer;
        transition: border-color 0.15s ease, color 0.15s ease;
        padding: 0;
    }

    .compact-add:hover {
        border-color: var(--cv-primary);
        color: var(--cv-primary);
    }

    .compact-add svg {
        width: 24px;
        height: 24px;
    }

    .empty-state {
        padding: 32px 16px;
        text-align: center;
        color: var(--cv-text-secondary);
    }

    .empty-state p {
        margin: 8px 0 0;
        font-size: 0.9em;
    }
`;

export const dialogStyles = css`
    .dialog-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
    }

    .dialog {
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #212121);
        border-radius: 16px;
        max-width: 450px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }

    .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 16px 8px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }

    .dialog-header h2 {
        margin: 0;
        font-size: 1.1em;
        font-weight: 500;
    }

    .dialog-body {
        padding: 16px;
    }

    .dialog-footer {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        padding: 8px 16px 16px;
    }

    .form-group {
        margin-bottom: 14px;
    }

    .form-group label {
        display: block;
        font-size: 0.85em;
        font-weight: 500;
        margin-bottom: 4px;
        color: var(--secondary-text-color, #727272);
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 8px 10px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        font-size: 0.95em;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #212121);
        box-sizing: border-box;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--primary-color, #03a9f4);
    }

    .form-group textarea {
        resize: vertical;
        min-height: 60px;
    }

    .form-row {
        display: flex;
        gap: 10px;
    }

    .form-row .form-group {
        flex: 1;
    }

    .btn {
        padding: 8px 20px;
        border: none;
        border-radius: 8px;
        font-size: 0.9em;
        cursor: pointer;
        font-weight: 500;
        transition: background 0.15s ease;
    }

    .btn-primary {
        background: var(--primary-color, #03a9f4);
        color: #fff;
    }

    .btn-primary:hover {
        opacity: 0.9;
    }

    .btn-secondary {
        background: transparent;
        color: var(--primary-text-color, #212121);
    }

    .btn-secondary:hover {
        background: rgba(0, 0, 0, 0.05);
    }

    .btn-danger {
        background: var(--error-color, #db4437);
        color: #fff;
    }

    .btn-danger:hover {
        opacity: 0.9;
    }

    .btn-icon {
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        color: var(--primary-text-color, #212121);
        display: flex;
        align-items: center;
    }

    .file-upload {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .file-upload input[type="file"] {
        display: none;
    }

    .file-upload .upload-btn {
        padding: 6px 14px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        font-size: 0.85em;
        cursor: pointer;
        background: transparent;
        color: var(--primary-text-color, #212121);
    }

    .file-upload .file-name {
        font-size: 0.85em;
        color: var(--secondary-text-color, #727272);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .logo-picker {
        display: flex;
        gap: 8px;
        overflow-x: auto;
        padding: 4px 0;
        -webkit-overflow-scrolling: touch;
    }

    .logo-option {
        flex: 0 0 48px;
        width: 48px;
        height: 48px;
        border-radius: 8px;
        border: 2px solid var(--divider-color, #e0e0e0);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: border-color 0.15s ease;
    }

    .logo-option.selected {
        border-color: var(--primary-color, #03a9f4);
        box-shadow: 0 0 0 1px var(--primary-color, #03a9f4);
    }

    .logo-option img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .scan-section {
        margin-top: 8px;
        padding: 12px;
        border: 1px dashed var(--divider-color, #e0e0e0);
        border-radius: 8px;
        text-align: center;
    }

    .scan-section p {
        margin: 0 0 8px;
        font-size: 0.85em;
        color: var(--secondary-text-color, #727272);
    }

    .scan-result {
        margin-top: 8px;
        padding: 8px;
        background: rgba(76, 175, 80, 0.1);
        border-radius: 6px;
        font-size: 0.85em;
        color: var(--primary-text-color, #212121);
    }

    .loading {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid var(--divider-color, #e0e0e0);
        border-top-color: var(--primary-color, #03a9f4);
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;

export const detailStyles = css`
    .detail-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
    }

    .detail-card {
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #212121);
        border-radius: 16px;
        max-width: 400px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }

    .detail-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
    }

    .detail-header h2 {
        margin: 0;
        font-size: 1.15em;
        font-weight: 600;
    }

    .detail-header .actions {
        display: flex;
        gap: 4px;
    }

    .barcode-container {
        padding: 16px;
        text-align: center;
        background: #fff;
    }

    .barcode-container svg,
    .barcode-container canvas {
        max-width: 100%;
        height: auto;
    }

    .detail-info {
        padding: 0 16px 16px;
    }

    .detail-info .info-row {
        display: flex;
        justify-content: space-between;
        padding: 6px 0;
        font-size: 0.9em;
    }

    .detail-info .info-label {
        color: var(--secondary-text-color, #727272);
    }

    .detail-note {
        padding: 0 16px 16px;
        font-size: 0.9em;
        color: var(--secondary-text-color, #727272);
        font-style: italic;
    }

    .detail-images {
        display: flex;
        gap: 8px;
        padding: 0 16px 16px;
    }

    .detail-images img {
        flex: 1;
        max-width: 50%;
        border-radius: 8px;
        object-fit: cover;
        cursor: pointer;
    }
`;
