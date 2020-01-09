const url = require('url');
const http = require('http');

http.createServer((req, res) => {
    req.on('error', (err) => {
        console.error(err);
    }).on('data', (data) => {
    });

    if (req.method !== 'GET') {
        return res.end('send me a GET\n');
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    req.on('end', () => {
        const parsedUrl = url.parse(req.url, true);

        let result = null;
        const date = new Date(parsedUrl.query.iso);

        if (parsedUrl.pathname == '/api/parsetime') {
            result = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
        } else if (parsedUrl.pathname == '/api/unixtime') {
            result = {
                unixtime: date.getTime()
            };
        }

        res.end(JSON.stringify(result));
    });
}).listen(process.argv[2]);
