console.log(__filename) // filename 
console.log(__dirname) // directory path

const EventEmmitter = require('events') // EvenEmmitter is a class
const emitter = new EventEmmitter();

var url = 'http://mylogger.io/log'

function log(message){
    // send a HTTP request
    console.log(message);

    // raise an event & event arguments
    emitter.emit('messageLogged', {id: 1, url: 'http://'}) // produce something


}

// module.exports.log = log; // exporting log function
// exports.log = log; // alternative way
module.exports = log;
// module.exports.endPoint = url // exporting url variable
    