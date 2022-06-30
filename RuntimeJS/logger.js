var url = 'http://mylogger.io/log'

console.log(__filename)
console.log(__dirname)

function log(message) {
    // Send an Http request
    console.log(message);
};

function log2(message) {
    console.log(message);
}

module.exports.log = log;
module.exports.senor = log2;