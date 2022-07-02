// function
const fs = require('fs');
const files = fs.readdirSync('./');

console.log(files)

const async_files = fs.readdir('./', function (err, files) {
    if (err) console.log('Error', err);
    else console.log('Results', files);
})
// console.log(async_files)

// // // Node Global objects
// console.log();

// setTimeout()
// clearTimeout();
// setInterval()
// clearInterval()

// // //