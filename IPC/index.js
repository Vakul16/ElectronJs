const electron = require("electron");
const ipc = electron.ipcRenderer;

const errorBtn = document.getElementById("errorBtn");

errorBtn.addEventListener("click", function () {
  ipc.send("open-error-dialog");
});

//here we are sending a message from the render process to main process and reply back from the main process to render process
ipc.on("opened-error-dialog", function (event, arg) {
  console.log(arg);
});

//async and sync
