import { app, BrowserWindow, ipcMain, Menu } from 'electron'
import { registerGlobalShortcuts, unRegisterLocalShortcuts } from './shortcuts'

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

// const assetsPath =
//   process.env.NODE_ENV === 'production'
//     ? process.resourcesPath
//     : app.getAppPath()

function createWindow () {
  mainWindow = new BrowserWindow({
    // icon: path.join(assetsPath, 'assets', 'icon.png'),
    width: 1100,
    height: 700,
    backgroundColor: '#FFFFFF',
    transparent : true,
    frame:false,
    webPreferences: {
      devTools:false,
      nodeIntegration: false,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// const dockMenu = Menu.buildFromTemplate([
//   {
//     label: 'New Window',
//     click () { console.log('New Window') }
//   }, {
//     label: 'New Window with Settings',
//     submenu: [
//       { label: 'Basic' },
//       { label: 'Pro' }
//     ]
//   },
//   { label: 'New Command...' }
// ])

async function registerListeners () {
  /**
   * This comes from bridge integration, check bridge.ts
   */
  ipcMain.on('message', (_, message) => {
    console.log(message)
  })
}

app.on('ready', createWindow)
  .whenReady()
  .then(registerListeners)
  .then(registerGlobalShortcuts)
  // .then(()=>{
  //   app.dock.setMenu(dockMenu)
  //   // if (process.platform === 'darwin') {      
  //   // }
  // })
  .catch(e => console.error(e))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.on('will-quit', function() {
  unRegisterLocalShortcuts();
});
