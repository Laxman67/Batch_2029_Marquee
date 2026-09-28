const EventEmitter = require('events');

// Emitter

const chatEventEmitter = new EventEmitter();

function ChatUserMetaData(content, sendUserId, receiverId, isSeen = false) {
  this.chatDescription = content;
  this.timeDate = new Date().toLocaleString();
  this.isSeen = isSeen;
  this.sender = { userId: sendUserId };
  this.receiver = { userId: receiverId };
}

const ChatEvents = {
  send: 'chat:send',
  receive: 'chat:recieve',
};

chatEventEmitter.on(ChatEvents.send, (metaData) => {
  const { receiver, sender, timeDate, chatDescription } = metaData;
  console.log(`Chat Sent to Receiver ID: ${receiver.userId}`);
});

chatEventEmitter.emit(
  ChatEvents.send,
  new ChatUserMetaData(
    'Hello',
    `Sender-${crypto.randomUUID()}`,
    `Reciver-${crypto.randomUUID()}`
  )
);

// console.log(`**** Chat Sent to Receiver:${receiver.userId} ****

//               Time: ${timeDate}
//     -----------------------------------------------------
//               Message: ${chatDescription}
//     -----------------------------------------------------
//     `);

// metaData= {
//   content: "Content"
//   timeDate: "28-09-2026,12:00",
//   isSeen:false,
//   sender:{userId},
//   receiver:{userId}
// }
