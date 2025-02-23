import fs from 'fs';

function booksStartWithThe(books) {
    let result = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].title.substring(0, 3) === "The") {
            result.push(books[i]);
        }
    }
    return result;
}

const data = JSON.parse(fs.readFileSync('example_files/books.json', 'utf-8'));

//console.log(booksStartWithThe(data))

function booksWithTInAuthor(books) {
    let result = [];
    for (let i = 0; i < books.length; i++) {
        let author = books[i].author;
        for (let j = 0; j < author.length; j++) {
            if (author[j] === "t" || author [j] === "T") {
                result.push(books[i]);
                break;
            }
        }
    }
    return result;
}

//console.log(booksWithTInAuthor(data));

function countBooksAfter(books, year) {
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].publication_year > year) {
            count++;
        }
    }
    return count;
}

function countBooksBefore(books, year) {
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].publication_year < year) {
            count++;
        }
    }
    return count;
}



//console.log(countBooksBefore(data, 2004));

function sortBooksAlphabetically(books, ascending = true) {
    let sortedBooks = books.slice();

    for (let i = 0; i < sortedBooks.length - 1; i++) {
        for (let j = 0; j < sortedBooks.length - i - 1; j++) {
            let swap = false;
            if (ascending) {
                if (sortedBooks[j].title > sortedBooks[j + 1].title) {
                    swap = true;
                }
            } else {
                if (sortedBooks[j].title < sortedBooks[j + 1].title) {
                    swap = true;
                }
            }

            if (swap) {
                let temp = sortedBooks[j];
                sortedBooks[j] = sortedBooks[j + 1];
                sortedBooks[j + 1] = temp;
            }
        }
    } 
    return sortedBooks;
}

//console.log(sortBooksAlphabetically(data, true));

function sortBooksChronologically(books, ascending = true) {
    let sortedBooks = books.slice();

    for (let i = 0; i < sortedBooks.length - 1; i++) {
        for (let j = 0; j < sortedBooks.length - i - 1; j++) {
            let swap = false;
            if (ascending) {
                if (sortedBooks[j].publication_year > sortedBooks[j + 1].publication_year) {
                    swap = true;
                }
            } else {
                if (sortedBooks[j].publication_year < sortedBooks[j + 1].publication_year) {
                    swap = true;
                }
            }

            if (swap) {
                let temp = sortedBooks[j];
                sortedBooks[j] = sortedBooks[j + 1];
                sortedBooks[j + 1] = temp;
            }
        }
    } 
    return sortedBooks;
}

//console.log(sortBooksChronologically(data, true));

function groupBooksByFirstName(books) {
    let groups = {};

    for (let i = 0; i < books.length; i++) {
        let authorParts = books[i].author.split(" ");
        let firstName = authorParts[0];

        if (!groups[firstName]) {
            groups[firstName] = [];
        }
        groups[firstName].push(books[i])
    }

    return groups;
}

function groupBooksByLastName(books) {
    let groups = {};

    for (let i = 0; i < books.length; i++) {
        let authorParts = books[i].author.split(" ");
        let lastName = authorParts[0];

        if (!groups[lastName]) {
            groups[lastName] = [];
        }
        groups[lastName].push(books[i])
    }

    return groups;
}

//console.log(groupBooksByFirstName(data));
//console.log(groupBooksByLastName(data));

let books = [
    { title: "The Hobbit", publication_year: 1937, author: "J.R.R. Tolkien", isbn: "12345" },
    { title: "Meditations", publication_year: 2002, author: "Marcus Aurelius", isbn: "67890" },
    { title: "The Catcher in the Rye", publication_year: 1951, author: "J.D. Salinger", isbn: "22222" }
];