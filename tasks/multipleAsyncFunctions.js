const fetchBookTitle = async (isbn) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(`Fetched title for ISBN: ${isbn}`);
    return "Sample Book Title";
};

const fetchBookAuthor = async (isbn) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(`Fetched author for ISBN: ${isbn}`);
    return "Sample Author";
};

const displayCompleteBookDetails = async (isbn) => {
    try {
        const [title, author] = await Promise.all([
            fetchBookTitle(isbn),
            fetchBookAuthor(isbn),
        ]);
        console.log(`Book Details: Title - ${title}, Author - ${author}`);
    } catch (error) {
        console.error("Error fetching book details:", error);
    }
};

// Test the function by calling it with an example ISBN
displayCompleteBookDetails("978-1-60309-452-8");
