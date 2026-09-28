const path = require('path');
const fs = require('fs');

const filepath = 'downloads/user_reports/annual_summary2.pdf';

const Directory = path.dirname(filepath);
console.log('Directory', Directory);

const Extension = path.extname(filepath);
console.log('Extension', Extension);

const FileName = path.basename(filepath, '.pdf');
console.log('FileName', FileName);

console.log('Exists:', fs.existsSync(filepath));
