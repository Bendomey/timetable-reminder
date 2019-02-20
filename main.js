const { app, BrowserWindow, ipcMain,Tray } = require('electron');
const path = require('path');
let window;
let tray;

app.on('ready', () => {
    window = new BrowserWindow({
        height: 400,
        width: 300,
        frame: false,
        resizable: false,
        show: false
    });
    window.loadURL(`file://${path.join(__dirname, 'index.html')}`);

    // adding the system tray here
    const iconName = 'icon.png';//the image name in the string
    const iconPath = path.join(__dirname, `./images/${iconName}`)
    tray = new Tray(iconPath);
    // on click on the tray toggle the tab
    tray.on('click', () => {
        if(window.isVisible()){
            window.hide();
        }else{
            window.show();
        }
    });

    window.on('close', () => {
        window = null;
    });
});

ipcMain.on('close:app', (event, data) => {
    if(data) window.hide();
});