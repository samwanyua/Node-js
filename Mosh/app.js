const http = require('http');
const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.write("Hello, my name is Sam and I am backend developer!")
        response.end();
    }
}); // server is an event emmitter

// handler
server.on('connection', socket =>{
    console.log('New connection...')
})


server.listen(3000);

console.log('Listening on port 3000...');

