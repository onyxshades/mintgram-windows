const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "MintGram",
    autoHideMenuBar: true, // Скрывает стандартное верхнее меню (Файл, Правка и т.д.)
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Указываем адрес твоего запущенного сайта или туннеля
  mainWindow.loadURL('https://m1ntgram.loca.lt');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
