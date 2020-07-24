
function Library() {
    let booksList = [];

    this.addBook = (book) => {
        booksList.push(book);
    }

    this.addBooks = (books) => {
        books.forEach(book => booksList.push(book));
    }

    this.getListOfBooks = () => {
        return booksList;
    }

    this.getBookInfo = bookTitle => {
        const isBookFound = booksList.filter(book => book.title === bookTitle);
        return isBookFound ? isBookFound : "No Book found with that title";
    }

    this.issueBook = (user, bookTitle) => {
        if (user.issuedBooks.length < 3) {
            const isBookFound = booksList.filter(book => book.title === bookTitle && book.issuedTo === null);
            if (isBookFound.length === 0) {
                return "Sorry, the book you are looking for is not in the library";
            } else {
                const availableBookIndex = booksList.findIndex(book => book.title === bookTitle && book.issuedTo === null );
                booksList[availableBookIndex]["issuedTo"] = user;
                booksList[availableBookIndex]["issuedAt"] = new Date();
                user.issuedBooks.push({
                    bookId: booksList[availableBookIndex].id,
                    title: booksList[availableBookIndex].title
                });
                
                return booksList[availableBookIndex];
            }
            
        }
        return "You are already issued 3 books"; 

    }
}

module.exports = Library;