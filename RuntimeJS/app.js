// function
// const EventEmmiter = require('events');
// const emitter = new EventEmmiter();

const EventEmitter = require('events');
const emitter = new EventEmitter();


// emitter.on('messagedLogged', function (eventArg) {
//     console.log('Listener called', eventArg);
// });

emitter.on('messagedLogged', eventArg => {
    console.log('Listener called', eventArg);
});

emitter.on('logging', eventArgs => {
    console.log("Listener Called", eventArgs)
})

// Raise an event
emitter.emit('messagedLogged', { id: 1, url: 'http://' });

// Raise: logging (data: message)
emitter.emit('logging', { id_data: 1, message: "Hello" })


// console.log(async_files)

// // // Node Global objects
// console.log();

// setTimeout()
// clearTimeout();
// setInterval()
// clearInterval()

// // //