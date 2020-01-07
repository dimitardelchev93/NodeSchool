module.exports = (arr, fn, thisArg) => {
    return arr.reduce((acc, item, index, arr) => {
        acc.push(fn.call(thisArg, item, index, arr));

        return acc;
    }, []);
}
