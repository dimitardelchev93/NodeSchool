const http = require('http');
let collectedData = '';

http.get(process.argv[2], response => {
    response.setEncoding('utf8');
    response.on('data', data => {
        collectedData += data;
    });
    response.on('end', data => {
        console.log(collectedData.length);
        console.log(collectedData);
    });
    response.on('error', console.error);
}).on('error', console.error);
