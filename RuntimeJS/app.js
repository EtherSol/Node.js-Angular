// function
const EventEmmiter = require('events');
const emitter = new EventEmmiter();


emitter.on('messagedLogged', function (eventArg) {
    console.log('Listener called', eventArg);
});

emitter.emit('messagedLogged', { id: 1, url: 'http://' });
// console.log(async_files)

// // // Node Global objects
// console.log();

// setTimeout()
// clearTimeout();
// setInterval()
// clearInterval()

// // //