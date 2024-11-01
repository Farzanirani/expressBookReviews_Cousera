const express = require("express");
const jwt = require("jwt-simple");
const books = require("../booksdb.js");

const authenticated = express.Router();
const users = [];

authenticated.post('/register', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.status(200).json({ message: "User registered successfully" });
});

authenticated.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.encode({ username }, "your-secret-key");
        req.session.token = token;
        res.status(200).json({ message: "Login successful", token });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

authenticated.put('/auth/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const review = req.body.review;
    const username = req.session.token && jwt.decode(req.session.token, "your-secret-key").username;
    
    if (username) {
        books[isbn].reviews[username] = review;
        res.status(200).json({ message: "Review added/modified" });
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
});

authenticated.delete('/auth/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const username = req.session.token && jwt.decode(req.session.token, "your-secret-key").username;
    
    if (username && books[isbn].reviews[username]) {
        delete books[isbn].reviews[username];
        res.status(200).json({ message: "Review deleted" });
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
});

module.exports = authenticated;
