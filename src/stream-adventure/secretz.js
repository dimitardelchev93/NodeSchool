const crypto = require('crypto');
const tar = require('tar');
const zlib = require('zlib');
const concat = require('concat-stream');
const parser = new tar.Parse();

parser.on('entry', e => {
    if (e.type !== 'File') {
        return e.resume();
    }

    const h = crypto.createHash('md5', { encoding: 'hex' });

    e.pipe(h).pipe(concat(hash => {
        console.log(hash + ' ' + e.path);
    }));
});

const cipher = process.argv[2];
const pw = process.argv[3];

process.stdin
    .pipe(crypto.createDecipher(cipher, pw))
    .pipe(zlib.createGunzip())
    .pipe(parser);
