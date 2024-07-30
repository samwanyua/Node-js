const http = require('http');
const server = http.createServer(); // server is an event emmitter
server.listen(3000);

console.log('Listening on port 3000...');

