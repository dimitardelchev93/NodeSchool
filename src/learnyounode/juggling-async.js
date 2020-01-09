const http = require('http');
let collectedData = [];
let count = 0;
const max = process.argv.length - 2;

for (let i = 2; i < 2 + max; i++) {
    http.get(process.argv[i], response => {
        response.setEncoding('utf8');
        response.on('data', data => {
            collectedData[i - 2] = collectedData[i - 2] ? collectedData[i - 2] + data : data;
        });
        response.on('end', data => {
            count++;

            if (count == max) {
                collectedData.forEach(item => {
                    console.log(item);
                });
            }
        });
        response.on('error', console.error);
    }).on('error', console.error);
}
