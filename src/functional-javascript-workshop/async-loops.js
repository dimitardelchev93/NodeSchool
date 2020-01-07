function loadUsers(userIds, load, done) {
    var completed = 0;
    var users = [];

    userIds.forEach((id, index) => {
        load(id, (user) => {
            users[index] = user;

            if (++completed === userIds.length) {
                return done(users);
            }
        });
    });
}

module.exports = loadUsers;
