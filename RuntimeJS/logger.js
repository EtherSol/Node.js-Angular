const EventEmitter = require('events')


var url = 'http://mylogger.io/log'

class Logger extends EventEmitter {
    log(message) {
        // Send an Http request
        console.log(message);
        this.emit('messagedLogged', { id: 1, url: 'http://' });
    };
}

module.exports = Logger;
