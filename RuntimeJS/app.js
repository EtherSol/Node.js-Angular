// function
// const EventEmmiter = require('events');
// const emitter = new EventEmmiter();

const EventEmitter = require('events');

const Logger = require('./logger')
const logger = new Logger()

// emitter.on('messagedLogged', function (eventArg) {
//     console.log('Listener called', eventArg);
// });

logger.on('messagedLogged', eventArg => {
    console.log('Listener called', eventArg);
});

logger.log('message')


// console.log(async_files)

// // // Node Global objects
// console.log();

// setTimeout()
// clearTimeout();
// setInterval()
// clearInterval()

// // //