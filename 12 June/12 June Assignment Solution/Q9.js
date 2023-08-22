const EventEmitter = require('events');

const event = new EventEmitter();

function eventHandler(){
    console.log("Event Handler called !")
}
event.on('myevent',eventHandler);

event.emit('myevent'); //output -> Event Handler called !
event.off('myevent',eventHandler);
event.emit('myevent');//no output