module.exports = (operation, num) => {
    if (num-- > 0) {
        module.exports(operation, num);
    }
}
