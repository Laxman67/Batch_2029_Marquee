const fs = require('fs');
let fileFodler = fs.readdirSync('Courses', { withFileTypes: true }, (err) => {
  if (err) {
    console.log(`Error :${err}`);
  }
});

console.log(fileFodler);
