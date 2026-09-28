// Task 2: Create a Folder on Event
// Emit a `folderCreate` event with a folder name as the argument. The listener should use fs.mkdirSync() to create that folder, then emit a folderCreated event once it exists.

const { EventEmitter } = require('events');
const fs = require('fs');

const fsEventEmitter = new EventEmitter();

const EVENT_NAME = 'folderCreate';

fsEventEmitter.on(EVENT_NAME, (folderName) => {
  console.log(`Folder Created With Named : "${folderName}" `);
});

// Emit after Folder creation

let folderName = 'Events/Management';
const resFullPath = fs.mkdirSync(folderName, { recursive: true }, (err) => {
  if (err) {
    console.log(`Error: occured While Creating Folder !`);
  }
});

// Final :  emit the event
fsEventEmitter.emit(EVENT_NAME, resFullPath);
