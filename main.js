const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let window;

app.on('ready', () => {
    window = new BrowserWindow({
        height: 400,
        width: 300,
        frame: false,
        resizable: false
    });
    window.loadURL(`file://${path.join(__dirname, 'index.html')}`);

    window.on('close', () => {
        window = null;
    });
});

ipcMain.on('close:app', (event, data) => {
    if(data) window.hide();
});