// common js
const path = require('path');

console.log(path.isAbsolute('/Folder/File.txt'));

// /root
//

// // Es modules
// // import path from 'path'
// // basename : file name
// console.log(
//   'Basename:filename: -> ',
//   path.basename('Courses/MERN Stack/index.js', '.js')
// );

// // dirname
// console.log(
//   'dirname: DirectoryName: -> ',
//   path.dirname('Courses/MERN Stack/index.js')
// );
// // extname >> option ''

// console.log(
//   'extension: .js : -> ',
//   path.extname('Courses/MERN Stack/index.js')
// );
// // join

// console.log(
//   'Full Path : JOIN',
//   path.join('Courses', 'JavaFullStack', 'Chapter1', 'notes.txt')
// );

// // parse and format

// // TODO:
// // parse : convert path into object
// console.log('Parse: return object ', path.parse('Courses/MERN Stack/index.js'));
// console.log('====SIMPLE======');
// const parsedObject = path.parse('Courses/MERN Stack/index.js');
// console.log('DIRNAME: ', parsedObject.dir);
// console.log('Extension: ', parsedObject.ext);
// console.log('name: with extension--> ', parsedObject.base);
// console.log('name: ', parsedObject.name);

// // format:  convert from object to path
// let systemPath = {
//   root: 'C:/',
//   dir: 'C://System32/Apps',
//   base: 'config.bat',
//   ext: '.bat',
//   name: 'config',
// };
// console.log('Formated Path :', path.normalize(path.format(systemPath)));

// // C:/System32/Apps/config.bat

// // resolve : join  (new path )with absolute path

// console.log('RESOLVE: ', path.resolve('Batch_09'));

// // normalize

// console.log(`Normalize: `, path.normalize('System//Apps//Config/../'));
// console.log(`Normalize: `, path.normalize(''));
