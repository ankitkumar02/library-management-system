var uuid = require('uuid');

class User {
    constructor(name) {
        this.id = uuid.v4();
        this.name = name;
        this.issuedBooks = [];
    }
}

module.exports = User;