// Task 1: Create a File on Start
// Create an EventEmitter and emit a 'fileCreated' event when a file is successfully created inside a folder named `Configuration`. Attach a listener that logs the file name (config.txt).

// path: /Configuration/config.txt

const EventEmitter = require('events');
const fs = require('fs');
// Emitter
const fsEventEmitter = new EventEmitter();

const EVENT_NAME = 'fileCreated';
const FOLDER_NAME = 'Configuration';

fsEventEmitter.on(EVENT_NAME, (filename) => {
  console.log(`File Created Successfully ! Filename: ${filename}`);
});

//TODO:  File Creation inside Folder
const fullPath = `${FOLDER_NAME}/config.txt`;

fs.mkdir(FOLDER_NAME, (err) => {
  if (err) {
    console.log(`Error Occured: ${err}`);
  }

  fs.writeFile(fullPath, 'Hello File Creation Taks', (err) => {
    if (err) {
      console.log(`Error Occured`);
    }
    // TODO: Emit the Event fileCreated
    fsEventEmitter.emit(EVENT_NAME, fullPath);
  });
});
