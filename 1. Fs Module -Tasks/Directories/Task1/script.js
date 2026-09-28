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
createFolderFiles(folderNames);

// Task 2: create a Func that deletes folder and its file (index.js) and
// pass `Courses/Folder`  as a argument

// function deleteFolderByName(folder) {
//   fs.rm(folder, { recursive: true }, (err) => {
//     if (err) {
//       console.log(`Error :${err}`);
//     }
//   });
// }

// folderNames.forEach((folder) => {
//   deleteFolderByName(`Courses/${folder}`);
// });
