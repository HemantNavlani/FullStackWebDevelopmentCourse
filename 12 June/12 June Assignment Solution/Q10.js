const EventEmitter = require('events');
const event = new EventEmitter();
const currentMaxListeners = event.getMaxListeners();
console.log(`Default max listeners are ${currentMaxListeners}`)
event.setMaxListeners(2)
console.log('Max listeners set to 5')
const eventHandler = () => console.log("Event Handler Called");
for(let i=1;i<=9;i++){
    event.on('myevent',eventHandler);
}
event.emit('myevent');
