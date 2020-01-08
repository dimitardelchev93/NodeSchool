const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = process.argv[3] || '';

if (dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return console.error(err);
        }

        files.forEach((file) => {
            if (path.extname(path.join(file)).substring(1) === ext) {
                console.log(file);
            }
        });
    });
}
