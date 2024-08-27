
const { log } = require('console');
const events = require('events');

const {EventEmitter} = events;

const eventEmitter = new EventEmitter();

//  Register an event
eventEmitter.on('tenacious', function(){
    console.log("Hi Tena 🌹");
    
});

eventEmitter.emit("tenacious")

//  You can also pass in parameter

// eventEmitter.on('event-1', function(param1, value){
//     console.log("hi Phil");
//     console.log(param1);
//     console.log(value);
    
// });

// eventEmitter.emit('event-1', "Bye dear", 500)


eventEmitter.on('event-1', function(obj){
    console.log("hi Phil");
    console.log(obj);
    
});

eventEmitter.emit('event-1', {msg: "Hallo", age:25, name:"Tenacious"});