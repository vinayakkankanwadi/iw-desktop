"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const electron_1 = require("electron");
function createWindow() {
    const win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    win.loadFile('index.html');
}
electron_1.app.on('ready', createWindow);
