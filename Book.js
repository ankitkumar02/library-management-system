var uuid = require("uuid");

function Book(title, subject, author, publicationYear) {
    this.id = uuid.v4();
    this.title = title;
    this.subject = subject;
    this.author = author;
    this.publicationYear = publicationYear;
    this.issuedTo = null;
    this.issuedAt = null;
}

module.exports = Book;

