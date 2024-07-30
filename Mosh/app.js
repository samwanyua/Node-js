const http = require('http');
const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.write("Hello, my name is Sam and I am backend developer!")
        response.end();
    }

    if(request.url === '/api/v1/projects'){
        response.write(JSON.stringify(['Fuzu android app', 'Fuzu ios app', 'Fuzu Web app']))
        response.end()
    }
}); // server is an event emmitter

// handler
server.on('connection', socket =>{
    console.log('New connections...')
})


server.listen(3000);

console.log('Listening on port 3000...');

