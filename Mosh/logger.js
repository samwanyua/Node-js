console.log(__filename) // filename 
console.log(__dirname) // directory path

var url = 'http://mylogger.io/log'

function log(message){
    // send a HTTP request
    console.log(message);
}

module.exports.log = log; // exporting log function
// exports.log = log; // alternative way
// module.exports = log;
// module.exports.endPoint = url // exporting url variable
    