var electron = require('electron');
require('./main/menu.js')

var app = electron.app;

var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences:{ nodeIntegration: true }
    });
    mainWindow.loadFile('index.html');
    mainWindow.on('close',()=>{
        mainWindow = null;
    })
})