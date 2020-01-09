const http = require('http');

http.createServer((req, res) => {
    let body = [];

    if (req.method !== 'POST') {
        return res.end('send me a POST\n')
    }

    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();

        res.end(body.toUpperCase());
    });
}).listen(process.argv[2]);
