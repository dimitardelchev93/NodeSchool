module.exports = (words) => {
    return words.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = ++accumulator[currentValue] || 1;

        return accumulator;
    }, {});
}
