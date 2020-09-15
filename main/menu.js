const { Menu,BrowserWindow } = require('electron')

var template = [
    {
        label: '文件',
        submenu: [
            {
                label: 'spa',
                accelerator:`ctrl+n`,
                click:()=>{
                    win = new BrowserWindow({
                        width:500,
                        height:500,
                        webPreferences:{
                            nodeIntegration: true
                        }
                    })
                    win.loadFile('white.html')
                    win.on('closed',()=>{
                        win = null
                    })
                }
            }
        ]
    },
    {
        label: '帮助',
        submenu: [
            {
                label: 'xiyu',
                label: 'paishou'
            }
        ]
    }
]

var m = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(m)