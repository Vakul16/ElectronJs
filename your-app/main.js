// console.log("main process executed");
// console.log("main.js");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let winOne, winTwo;
//to create window
function createWindow() {
  //
  winOne = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  winTwo = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });

  winOne.loadURL(
    url.format({
      pathname: path.join(__dirname, "One.html"),
      protocol: "file",
      slashes: true,
    })
  );
  winTwo.loadURL(
    url.format({
      pathname: path.join(__dirname, "Two.html"),
      protocol: "file",
      slashes: true,
    })
  );
  winOne.webContents.openDevTools();
  winTwo.webContents.openDevTools();

  winOne.on("closed", () => {
    win = null;
  });
  winTwo.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

// const electron = require("electron");

// const { app, BrowserWindow } = require("electron");

// function createWindow() {
//   // Create the browser window.
//   let win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true,
//     },
//   });

//   // and load the index.html of the app.
//   win.loadFile("index.html");
// }

// app.whenReady().then(createWindow);
