// module wrapper function
(funtion (exports,require, module, __filename, __dirname) {
    var url = 'http://mylogger.io/log'

    function log(message){
        // send a HTTP request
        console.log(message);
    }

    module.exports.log = log; // exporting log function
    module.exports.endPoint = url // exporting url variable
})
    