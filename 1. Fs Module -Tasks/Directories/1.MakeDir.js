const { mkdir, rm, rename, existsSync } = require('fs');

let oldPath = 'NEW_FOLDER';
let NewPath = 'Updated_FOLDER';

// TODO: for Rename
rename(oldPath, NewPath, (err) => {
  if (err) {
    console.log('Error : ', err);
  }
  console.log('Rename complete!');
});
// TODO: for checking folder existence

let folderExists = existsSync(oldPath, (err) => {
  if (err) {
    console.log(`Error : ${err}`);
  }
});

console.log('folderExists: ', folderExists);

// Setup
// Folder (Directory Task)
// script.js >>  for Task 1

// Task 1
// Check for folder (Courses) >> if (true) then  run createFolderFiles(folderNames);
// >> if not -- then create folder(Courses) >> run createFolderFiles(folderNames);
