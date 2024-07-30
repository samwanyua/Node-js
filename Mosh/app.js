// app.js - our main module
// console.log(); // this is a global object
// setTimeout()
// clearTimeout()
// setInterval()
// clearInterval()

// window.console.log()

var message = 'Jump'; // added to global scope, accessed via global object
var sayHello = (name) => {
    console.log('Hello ' + name);
}

// window.sayHello("Wanyua")

// Creating modules - every file is a module
// variables and functions defines in that file or that module are scoped to that file

// console.log(module)

// Loading modules
const logger = require('./logger');
// require('./subfolder/logger')
// require('../parentfolder/logger') 
console.log(logger);
logger.log("You are doing great!");

// path module
const path = require('path');

let pathObject = path.parse(__filename);
console.log(pathObject)

// os module
const os = require('os')
const freeMem = os.freemem()
const totalMemory= os.totalmem()
console.log(`Free memory: ${freeMem}`)
console.log(`Total memory: ${totalMemory}`)

// file system module
const fs = require('fs')
const files = fs.readdirSync('./')
console.log(files)
 
// asynchronous method
fs.readdir('./', function(err,files){
    if(err) console.log('Error', err)
    else console.log('Result', files)
})




