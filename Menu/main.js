console.log("quote executing");
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;
//for global shortcut
const globalShortcut = electron.globalShortcut;

let win;
function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file",
      slashes: true,
    })
  );
  win.webContents.openDevTools();
  win.on("closed", () => {
    win = null;
  });
  win.once("ready-to-show", () => {
    win.show();
  });
}
app.on("ready", function () {
  createWindow();
  //   Menu.buildFromTemplate(template)
  const template = [
    {
      label: "Edit",
      submenu: [
        { role: "undo" },
        { role: "redo" },
        { type: "separator" },
        { role: "cut" },
        { role: "copy" },
        { role: "paste" },
        { role: "pasteandmatchstyle" },
        { role: "delete" },
        { role: "undo" },
        { role: "selectall" },
      ],
    },
    {
      label: "Demo",
      submenu: [
        {
          label: "Menu 1",
          click: function () {
            console.log("sub menu 1 clicked");
          },
        },
        {
          type: "separator",
        },
        {
          label: "Menu 2",
        },
      ],
    },
    {
      label: "Help",
      submenu: [
        {
          label: "About electron",
          click: function () {
            electron.shell.openExternal("https://www.electronjs.org/");
          },
          accelerator: "Ctrl + Shift + H",
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  const ctxMenu = new Menu();
  ctxMenu.append(
    new MenuItem({
      label: "Hello",
      click: function () {
        console.log("Context menu item clicked");
      },
    })
  );
  ctxMenu.append(new MenuItem({ role: "selectAll" }));
  win.webContents.on("context-menu", function (e, params) {
    ctxMenu.popup(win, params.x, params.y);
  });
  //for registering global shortcut
  globalShortcut.register("Alt+1", function () {
    win.show();
  });
});
//when the app is going to quit global shortcut will quit when we unregister all
app.on("will-quit", function () {
  globalShortcut.unregisterAll();
});
