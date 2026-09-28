const fs = require('fs');

const writeStream = fs.createWriteStream('Management.xlsx');
const readStream = fs.createReadStream('Retail Inventory.xlsx');

readStream.pipe(writeStream);
// input->output->input->output
