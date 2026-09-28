const { readFile, writeFile } = require('fs/promises');

// let data = readFile('neFile.txt', 'utf-8', (err) => {});

// data.then((d) => {
//   console.log(d);
// });

// async function readContent(path){ }

//

// data
//   .then((d) => {
//     console.log(d);
//   })
//   .catch((err) => {
//     console.log(`Error :${err}`);
//   });

// console.log('LOG-2');

const data = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'Laksh' });
  }, 2000);
});

async function greet() {
  try {
    // console.log('Read');
    // console.log('WRite');
    // console.log('Update');
    console.log('Data-1');

    const dataFromPromise = await data;
    let actualData = await dataFromPromise;
    console.log(actualData);

    console.log('Data-2');
  } catch (error) {
    console.log(error);
  }
}
greet();
