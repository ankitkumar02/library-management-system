var Book = require('./Book');
var Library = require("./Library");
var User = require("./User");
var BooksList = require('./BooksList');

let library = new Library();


library.addBooks(BooksList);
// console.log(library.getListOfBooks());
// console.log(library.getBookInfo("Harry Potter 4"));


let user1 = new User("ankit");
console.log(user1);

console.log(library.issueBook(user1, "Harry Potter 4"));
console.log(library.issueBook(user1, "Harry Potter 4"));
console.log(library.issueBook(user1, "Harry Potter 4"));

 console.log(user1.issuedBooks);

console.log(library.issueBook(user1, "Harry Potter 1"));
 console.log(library.issueBook(user1, "Harry Potter 2"));

 console.log(library.getBookInfo("Harry Potter 4"));




