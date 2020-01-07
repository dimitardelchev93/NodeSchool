function repeat(operation, num) {
    return () => {
        if (num <= 0) {
            return;
        }

        operation();

        return repeat(operation, --num);
    }
}

module.exports = (operation, num) => {
    return repeat(operation, num);
}
