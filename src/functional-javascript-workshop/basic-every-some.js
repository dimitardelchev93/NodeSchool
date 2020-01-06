module.exports = (goodUsers) => {
    return (submittedUsers) => {
        return submittedUsers.every((submittedUser) => {
            return goodUsers.some((goodUser) => {
                return goodUser.id === submittedUser.id
            });
        });
    }
}
