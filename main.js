const { app, BrowserWindow, ipcMain,Tray } = require('electron');
const path = require('path');


// connection.query('INSERT into remainders VALUES (?,?,?,?)',[4,'Read JS', '12:04','14:08']);




let window;
let alert;
let tray;

app.on('ready', () => {
    window = new BrowserWindow({
        height: 500,
        width: 350,
        frame: false,
        resizable: false,
        show: false
    });
    alert = new BrowserWindow({
        height: 190,
        width: 400,
        frame: false,
        show: true,
        modal: true,
        movable: true
    });
    window.loadURL(`file://${path.join(__dirname, 'index.html')}`);
    alert.loadURL(`file://${path.join(__dirname, 'alarm.html')}`);
    // adding the system tray here
    const iconName = 'icon.png';//the image name in the string
    const iconPath = path.join(__dirname, `./images/${iconName}`)
    tray = new Tray(iconPath);
    // on click on the tray toggle the tab
    tray.on('click', () => {

        if(alert.isVisible()){
            alert.hide();
        }else{
            alert.show();
        }
        

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


