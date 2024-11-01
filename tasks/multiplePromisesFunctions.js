const fetchTitleWithPromise = (isbn) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched title for ISBN: ${isbn}`);
            resolve("Sample Book Title");
        }, 500);
    });
};

const fetchAuthorWithPromise = (isbn) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched author for ISBN: ${isbn}`);
            resolve("Sample Author");
        }, 500);
    });
};

const displayCompleteBookDetailsWithPromises = (isbn) => {
    Promise.all([fetchTitleWithPromise(isbn), fetchAuthorWithPromise(isbn)])
        .then((details) => {
            const [title, author] = details;
            console.log(`Book Details: Title - ${title}, Author - ${author}`);
        })
        .catch((error) => {
            console.error("Error fetching book details:", error);
        });
};

// Test the function by calling it with an example ISBN
displayCompleteBookDetailsWithPromises("978-1-60309-452-8");
