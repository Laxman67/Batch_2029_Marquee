// Task 1: Create a File on Start
// Create an EventEmitter and emit a 'fileCreated' event when a file is successfully created inside a folder named `Configuration`. Attach a listener that logs the file name (config.txt).

// path: /Configuration/config.txt

const { EventEmitter } = require('events');
const fs = require('fs');
const path = require('path');
const fsEventEmitter = new EventEmitter();
const EVENT_NAME = 'fileCreated';

//TODO:  Listen
fsEventEmitter.on(EVENT_NAME, (filename) => {
  console.log(`File Created ! Filename: ${filename}`);
});

const FOLDER_PATH = 'Configuration';
// Step 1:
fs.mkdirSync(FOLDER_PATH);

// Step 2:
fs.writeFileSync(
  `${FOLDER_PATH}/config.txt`,
  'Data Written by Events Module',
  () => {}
);

//TODO:  Emit
fsEventEmitter.emit(EVENT_NAME, FOLDER_PATH);
