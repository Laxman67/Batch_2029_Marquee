const fs = require('fs');

const folderNames = ['Java', 'MERN Stack', 'AI Agents', 'Python', 'DSA(Alpha)'];

function createFolderFiles(folderNames) {
  try {
    folderNames.forEach((folder) => {
      const folderPath = `Courses/${folder}`;
      // TODO: For Folder Creation
      fs.mkdir(folderPath, { recursive: true }, (err) => {
        if (err) {
          console.log(`Error :${err}`);
        }

        // TODO: For file Creation
        fs.writeFile(
          `Courses/${folder}/index.js`,
          `Welcome to ${folder}-index.js`,
          (err) => {
            if (err) {
              console.log(`Error :${err}`);
            }
          }
        );
      });
    });
  } catch (error) {
    console.log(`Error :${error}`);
  }
}

// Task 1
// Check for folder (Courses) >> if (true) then  run createFolderFiles(folderNames);
// >> if not -- then create folder(Courses) >> run createFolderFiles(folderNames);

// Path
const path = `Courses`;

if (fs.existsSync(path)) {
  createFolderFiles(folderNames);
} else {
  console.log(`Start Creating---`);

  fs.mkdir(path, (err) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
  });

  setTimeout(() => {
    createFolderFiles(folderNames);
  }, 3000);

  console.log(`END Creating---`);
}
