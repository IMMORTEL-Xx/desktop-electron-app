const {app, BrowserWindow} = require('electron');
const url = require("url");
const path = require("path");

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    frame: false,
    titleBarStyle: 'hidden',
    // transparent: true,
    width: 90,
    height: 20,
    webPreferences: {
      nodeIntegration: true,
      devTools: false //afficher la console dans la fenetre de l'app
    }
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/test-desktop-electron-app/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
  
  mainWindow.on('closed', function () {
    mainWindow = null
  })

  // mainWindow.setBackgroundColor('#56cc5b10')
  mainWindow.setAlwaysOnTop(true);
  mainWindow.show();
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})