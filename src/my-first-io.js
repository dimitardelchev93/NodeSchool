const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
const testText = buffer.toString();

console.log(testText.split('\n').length - 1);



