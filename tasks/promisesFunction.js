const fetchBookDetailsWithPromise = (isbn) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetched details for book with ISBN: ${isbn}`);
            resolve({ title: "Sample Book Title", author: "Sample Author" });
        }, 1000);
    });
};

const displayBookDetailsWithPromise = (isbn) => {
    fetchBookDetailsWithPromise(isbn)
        .then((bookDetails) => {
            console.log("Book Details:", bookDetails);
        })
        .catch((error) => {
            console.error("Error fetching book details:", error);
        });
};

// Test the function by calling it with an example ISBN
displayBookDetailsWithPromise("978-1-60309-452-8");
