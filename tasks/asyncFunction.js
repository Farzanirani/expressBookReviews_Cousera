const fetchBookDetails = async (isbn) => {
    try {
        // Simulating a delay to mimic an async call, such as a fetch request
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(`Fetched details for book with ISBN: ${isbn}`);
        return { title: "Sample Book Title", author: "Sample Author" };
    } catch (error) {
        console.error("Error fetching book details:", error);
        throw error;
    }
};

const displayBookDetails = async (isbn) => {
    const bookDetails = await fetchBookDetails(isbn);
    console.log("Book Details:", bookDetails);
};

// Test the function by calling it with an example ISBN
displayBookDetails("978-1-60309-452-8");
