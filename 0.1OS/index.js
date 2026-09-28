const os = require('os');

// console.log( / (1024 * 3));
// Bytes >> KB >> MB >> GB >> TB

const KB = os.totalmem() / 1024;
const MB = KB / 1024;
const GB = MB / 1024;
const TB = GB / 1024;

console.log('GB:', GB);
console.log('TB:', TB);
