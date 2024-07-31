function countCheckedInBooks(books) {
    return books.filter(book => book === true).length;
}

const books = [true, false, true, false, true];
console.log(countCheckedInBooks(books));
