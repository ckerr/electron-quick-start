// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {dialog} = require('electron').remote

function openDialog () {
    console.log(dialog.showErrorBox("title", "content"))
}

document.querySelector("#bt").addEventListener('click', openDialog)