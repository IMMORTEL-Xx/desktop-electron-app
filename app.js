const {app, BrowserWindow, ipcMain} = require('electron');
const url = require("url");
const path = require('path');


let mainWindow;

function handleSetTitle (event, title) {
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win.setTitle(title);
}

function createWindow () {
  mainWindow = new BrowserWindow({
  //titleBarStyle: 'hidden',
  width: 100,
  height: 400,
  webPreferences: {
    nodeIntegration: true,
    devTools: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
  })
  mainWindow.loadFile(path.join(__dirname, "/dist/test-desktop-electron-app/index.html"));
  
  mainWindow.webContents.openDevTools();

  mainWindow.setAlwaysOnTop(true);
  mainWindow.show();
}


app.whenReady().then(() => {
  ipcMain.on('set-title', handleSetTitle)
  createWindow()
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})