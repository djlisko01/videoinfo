// Using require syntax instead of import (like in React)
// because the code is run in the node.js runtime, which 
// uses common js modules (use require) and node.js does 
// not yet have support for es6 modules (use import)
const electron = require("electron");


// App Prop: Represents the overall running process of
// electron running on our screen (created automatically when app is started)
// App will give us a view in the lifecycle of events
// electron starts -> app process created (takes some time to create) and don't
// want to interact with it until it's ready -> app ready to start doing things (signal from electron)
// 
const { app, BrowserWindow } = electron;

// Every other process we will create ourselves.
// this is a preset electron event str (see electron docs)
app.on("ready", () => {
    // This is event based programming
    const mainWindow = new BrowserWindow({});
    // mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.loadFile("index.html")

});
