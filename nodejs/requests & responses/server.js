const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }

    
    
    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('<h1>hello,ninjas</h1>');
    // res.write('<h1>hello again,ninjas</h1>');

    // send an html file

    fs.readFile(path, (err, data) => {

        if (err) {
            console.log(err);
        } else {
            res.write(data);
        }

        res.end();
    })


});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests');
});
