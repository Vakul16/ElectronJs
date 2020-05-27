console.log("main process executed");
console.log("main.js");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const ipc = electron.ipcMain;
const dialog = electron.dialog;

let win;
//to create window
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
}
ipc.on("open-error-dialog", function (event) {
  dialog.showErrorBox("An error message", "Demo of an error message");
  //to reply to this particular event
  event.sender.send(
    "opened-error-dialog",
    "main process opened the error dialog"
  );
});

app.on("ready", createWindow);
