var max = 0;

process.argv.forEach(function(el, i) {
    if (i > 1) {
        max += parseInt(el);
    }
});

console.log(max);
