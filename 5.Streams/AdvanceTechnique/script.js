const sharp = require('sharp');
const fs = require('fs');

// What is the use of `Sharp` Module
// Resize images
// Rotate images
// Convert formats (jpg → png, webp, etc.)
// Compress images
// Crop images
// Change image quality

sharp('image.png')
  .resize(300, 300)
  .rotate(90)
  .jpeg({ quality: 50 })
  .toFile('updatedImg.jpg')
  .then(() => {
    console.log('Image resized successfully');
  })
  .catch((err) => {
    console.log(err);
  });
