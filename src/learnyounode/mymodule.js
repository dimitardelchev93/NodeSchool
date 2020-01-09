const fs = require('fs');
const path = require('path');

module.exports = function(dirPath, fileExt, fn) {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return fn(err);
        }

        fn(null, files.filter((file) => {
            return path.extname(file).substring(1) === fileExt;
        }));
    });
};
