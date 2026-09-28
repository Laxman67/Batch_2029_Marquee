const fs = require('fs');

// Events
// -	Open OK
// -	data OK
// -	close OK stream.close()
// -	error OK
const readStream = fs.createReadStream('dummy.txt', 'utf-8');

readStream.on('open', () => {
  console.log('File Open');
});

readStream.on('data', (data) => {
  console.log('Data::: ', data);
});

readStream.on('error', (err) => {
  console.log('Error::: ', err);
});
