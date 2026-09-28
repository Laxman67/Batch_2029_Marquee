const { EventEmitter } = require('events'); // commonjs
const greetEventEmitter = new EventEmitter();

// Step 1: Listener

greetEventEmitter.on('greet:morning', (fname, lname) => {
  console.log(`Good Morning ${fname}-${lname} !`);
});

// Step 2: Emit
greetEventEmitter.emit('greet:morning', 'BINOD!', 'Kumar');

// 1. event
// 2. eventEmitter  |  OK
// 3. event listenr | OK  .on(event,eventHandler)
// 4. event handler |  OK
