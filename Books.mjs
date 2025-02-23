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