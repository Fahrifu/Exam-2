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

console.log(booksStartWithThe(data))