const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    fs.createReadStream(process.argv[3]).pipe(res);
}).listen(process.argv[2]);
