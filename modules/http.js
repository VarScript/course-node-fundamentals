const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('New petition!');
    console.log(req.url);

    switch (req.url) {
        case '/Hi':
            res.write('Hi, how are you?');
            res.end();
            break;

        default:
            res.write('Error 404: i do not know what you want ');
            res.end();
    }
//     res.writeHead(201, { 'Content-Type': 'text/plain' })

//     //Write answer to the User
//     res.write('Hi, i know use HTTP of Node.js')

//     res.end();
}

console.log('Listening http in the port 3000');