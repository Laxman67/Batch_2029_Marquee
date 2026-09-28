const fs = require('fs'); // fs/promise

const books = {
  title: 'Alli goes to school',
  genre: 'Fiction',
  type: 'Children',
  pages: 56,
};

fs.writeFile(
  'newBook.json',
  JSON.stringify(books, ['genre', 'type', 'pages'], 10),
  (err) => {
    if (err) {
      console.log(`ERROR :::: ${err.message}`);
    }

    console.log('****EXECUTED****');
  }
);

fs.rename;
