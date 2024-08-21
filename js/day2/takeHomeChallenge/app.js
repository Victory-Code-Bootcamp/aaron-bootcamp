// app.js
const express = require('express');
const books = require('./book-data');

const app = express();
const port = 3000;

// Route to get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Route to get a single book by id and display the title and author
app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.json({ title: book.title, author: book.author });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Route to delete a book by id
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.json({ message: 'Book was deleted successfully' });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
