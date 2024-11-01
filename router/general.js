const express = require("express");
const books = require("../booksdb.js");

const general = express.Router();

general.get('/', (req, res) => {
    res.status(200).json(books);
});

general.get('/isbn/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const book = books[isbn];
    res.status(200).json(book);
});

general.get('/author/:author', (req, res) => {
    const author = req.params.author;
    const booksByAuthor = Object.values(books).filter(book => book.author === author);
    res.status(200).json(booksByAuthor);
});

general.get('/title/:title', (req, res) => {
    const title = req.params.title;
    const booksByTitle = Object.values(books).filter(book => book.title === title);
    res.status(200).json(booksByTitle);
});

general.get('/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const book = books[isbn];
    res.status(200).json(book.reviews || {});
});

module.exports = general;
