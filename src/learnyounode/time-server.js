const net = require('net');

Number.prototype.pad = function(size) {
    var s = String(this);
    
    while (s.length < (size || 2)) {
        s = '0' + s;
    }

    return s;
}

Date.prototype.format = function() {
    return this.getFullYear() + '-' +
        (this.getMonth() + 1).pad(2) + '-' +
        this.getDate().pad(2) + ' ' +
        this.getHours().pad(2) + ':' +
        this.getMinutes().pad(2) + '\n';;
}

net.createServer((socket) => {
    socket.end(new Date().format());
}).listen(process.argv[2]);
