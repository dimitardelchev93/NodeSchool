const through = require('through2');
const stream = through(write, end);
let lineCount = 1;

function write(buffer, encoding, next) {
    let string = buffer.toString();

    this.push(lineCount++ % 2 ? string.toLowerCase() : string.toUpperCase());
    next();
}

function end(done) {
    done();
}

process.stdin.pipe(stream).pipe(process.stdout);
