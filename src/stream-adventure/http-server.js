var through = require('through2');
var http = require('http');

http.createServer((req, res) => {
    if (req.method !== 'POST') {
        res.end('send me a POST\n');
    }
    
    req.pipe(through(function(buffer, encoding, next) {
        this.push(buffer.toString().toUpperCase());
        next();
    })).pipe(res);
}).listen(process.argv[2]);


