const { EventEmitter } = require('events');

// Event emitter | OK
const eventEmitter = new EventEmitter();

//Event
const EVENT_NAME = 'greet:afternoon';

eventEmitter.on('greet:morning', (username, message) => {
  console.log(`Hello username: ${username} --Message :::: ${message}`);
});

// Event Lsitenr .on(event,handler)  and Handler
eventEmitter.on(EVENT_NAME, (username, Obj) => {
  console.log(Obj);
  console.log(
    `Hello --${username}--- OBJ_NAME: [${Obj.name}]! Good afternoon }`
  );
});

// Event Emit() fucntion
eventEmitter.emit('greet:morning', 'BINOD', 'Good Morning');

eventEmitter.emit('greet:afternoon', 'Laksh', {
  name: 'laksh',
  department: 'IT',
});
