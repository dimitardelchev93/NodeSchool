var concat = require('concat-stream');

process.stdin.pipe(concat(buffer => {
    process.stdout.write(buffer.reverse());
}));
