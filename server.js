console.log("You are using Node"); // run file by typing 'node fileName' 
// printing the global object
console.log(global);

 const os = require('os'); // how to import modules in node
 const path = require('path')
//  const math = require('./math')
const {add, multiply, subtract, divide} = require('./math')



 console.log(os.type());
 console.log(os.version());
 console.log(os.homedir());

 console.log(__dirname);
 console.log(__filename);

 console.log(path.dirname(__filename));
 console.log(path.basename(__filename));
 console.log(path.extname(__filename));

 console.log(path.parse(__filename));

 console.log(add(43,23))
 console.log(divide(3423,23))
 console.log(subtract(342324234,324234123))
