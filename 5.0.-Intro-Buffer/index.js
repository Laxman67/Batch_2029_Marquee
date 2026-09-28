// A Buffer in Node.js is a globally available class used to directly handle and manipulate raw binary data.

// Since JavaScript traditionally only dealt with strings, Node.js introduced the Buffer class to efficiently read and write binary data. This is essential for low-level I/O operations, such as reading files from a file system, handling network streams, or processing TCP data packets

// 💡 Core Characteristics of Buffers
// • Fixed Size: Once a Buffer is created, its length cannot be changed.
// • Raw Memory: It allocates raw memory outside the V8 JavaScript engine heap.
// • Array-Like: It behaves similarly to an array of integers, where each element represents one byte of data (a value between 0 and 255).
// • Global Object: You do not need to use require() or import to use it; it is available globally.

// 1. Create a buffer from a string
const myBuffer = Buffer.from('Node.js');

// 2. Read the raw hex representation
console.log(myBuffer);
// Output: <Buffer 4e 6f 64 65 2e 6a 73>

// 3. Access individual bytes (returns the decimal ASCII/UTF-8 value)
console.log(myBuffer[0]);
// Output: 78 (which is 'N')

// 4. Convert it back to a string
console.log(myBuffer.toString());
// Output: Node.js
