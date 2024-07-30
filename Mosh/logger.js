console.log(__filename) // filename 
console.log(__dirname) // directory path

const EventEmmitter = require('events') // EvenEmmitter is a class

var url = 'http://mylogger.io/log'

class Logger extends EventEmmitter{
    log(message){ // function inside a class is called a method
        // send a HTTP request
        console.log(message);
    
        // raise an event & event arguments
        this.emitter.emit('messageLogged', {id: 1, url: 'http://'}) // produce something
    
    
    }log
}



// module.exports.log = log; // exporting log function
// exports.log = log; // alternative way
module.exports = Logger; // exporting Logger class
// module.exports.endPoint = url // exporting url variable
    