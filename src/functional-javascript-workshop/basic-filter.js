module.exports = (messages) => {
    return messages.filter(item => {
        return item.message.length < 50;
    }).map((item) => {
        return item.message;
    });
}
