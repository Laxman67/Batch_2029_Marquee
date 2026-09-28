const path = require('path');
const fs = require('fs');

const Input = 'your/project/dir/../dir/temp/logs/../logs/archive/code.js';

const CleanPath = path.join(Input);

console.log(CleanPath);

let currPath = './';

CleanPath.split('/').forEach((_path) => {
  currPath += _path;
  if (path.extname(currPath) == '') {
    fs.mkdirSync(currPath, { recursive: true });
  } else {
    fs.writeFileSync(_path, 'Hello');
  }
  console.log(currPath);
  currPath += '/';
});

fs.mkdirSync('./your', { recursive: true });
