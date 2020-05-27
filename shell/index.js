const openBtn = document.getElementById("openBtn");
const shell = require("electron").shell;

openBtn.addEventListener("click", function (event) {
  shell.showItemInFolder("/home/vakul/Desktop/Work/electronfolder");
  shell.openItem("/home/vakul/Desktop/Work/electronfolder/9a4a630.jpg");
  shell.openExternal("https://www.electronjs.org/docs");
});
