class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
}

// Sample list of books
const books = [
    new Book("Book 1", "author 1", 2005),
    new Book("Book 2", "author 2", 2015),
    new Book("Book 3", "author 3", 2008),
    new Book("Book 4", "author 4", 2012),
    new Book("Book 5", "author 5", 2003),
];

// Filter books published after 2010 and capitalize author names
const filteredBooks = books.filter(book => book.publicationYear >= 2010);
const booksWithCapitalizedAuthors = filteredBooks.map(book => ({
    title: book.title,
    author: book.author.toUpperCase(),
    publicationYear: book.publicationYear,
}));

console.log("Filtered Books (published after 2010 with author names capitalized):");
console.log(booksWithCapitalizedAuthors);
