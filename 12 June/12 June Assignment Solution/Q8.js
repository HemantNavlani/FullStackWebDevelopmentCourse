const EventEmitter  = require('events');
const event = new EventEmitter();
event.on('subscribe',(channel)=>{
    console.log(`Thanks for Subscribing to ${channel}`)
})
event.emit('subscribe','College Wallah');