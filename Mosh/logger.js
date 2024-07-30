console.log(__filename); // filename 
console.log(__dirname); // directory path

const EventEmitter = require('events'); // Correct spelling of EventEmitter

const url = 'http://mylogger.io/log'; // This variable is not used but correctly defined

class Logger extends EventEmitter {
    log(message) { // Function inside a class is called a method
        // Send a HTTP request (simulated with console.log)
        console.log(message);

        // Raise an event & event arguments
        this.emit('messageLogged', { id: 1, url: 'http://events' });
    }
}

// Exporting Logger class
module.exports = Logger;
// Optionally export additional variables
// module.exports.endPoint = url;
