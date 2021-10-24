import { globalShortcut } from 'electron'

async function registerGlobalShortcuts () {
  globalShortcut.register('CommandOrControl+X', () => {
    console.log('CommandOrControl+X is pressed')
  })
}

async function registerLocalShortcuts () {
  //@see Menu
//   Mousetrap.bind('up up down down left right left right b a enter', () => {
//     console.log('konami code')
//   })
}


function unRegisterLocalShortcuts () {
  // Unregister a shortcut.
  //globalShortcut.unregister('ctrl+x');
  // Unregister all shortcuts.
  //globalShortcut.unregisterAll();
  globalShortcut.unregisterAll();
}

export { registerLocalShortcuts, registerGlobalShortcuts, unRegisterLocalShortcuts } ;

/*
global-shortcut 模块包含以下函数:

globalShortcut.register(accelerator, callback)
accelerator Accelerator
callback Function
注册 accelerator 快捷键. 当用户按下注册的快捷键时将会调用 callback 函数.

globalShortcut.isRegistered(accelerator)
accelerator Accelerator
查询 accelerator 快捷键是否已经被注册过了,将会返回 true(已被注册) 或 false(未注册).

globalShortcut.unregister(accelerator)
accelerator Accelerator
注销全局快捷键 accelerator.

globalShortcut.unregisterAll()
注销本应用注册的所有全局快捷键.

*/

/*

You can use the Menu module to configure keyboard shortcuts that will be triggered only when the app is focused. To do so, specify an accelerator property when creating a MenuItem.

const {Menu, MenuItem} = require('electron')
  const menu = new Menu()
  
  menu.append(new MenuItem({
    label: 'Print',
    accelerator: 'CmdOrCtrl+P',
    click: () => { console.log('time to print stuff') }
  }))
You can configure different key combinations based on the user's operating system.

{
    accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Ctrl+Shift+I'
  }

  */