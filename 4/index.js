const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require('fs');
let arrBooks = [];

addBook();

function addBook() {
    let book = {};
    rl.question("Book title: ", (bookTitle) => {
        rl.question("Book author: ", (bookAuthor) => {
            rl.question("Book pages: ", (bookPages) => {
                book.title = bookTitle;
                book.author = bookAuthor;
                book.pages = bookPages;
                arrBooks.push(book);
                console.log("-------------------");
                console.log(arrBooks);
                rl.question("Continue? (y/n): ", (answer) => {
                    if (answer === "y") {
                        addBook();
                    } else {
                        console.log("Save");
                        saveBooks();
                    }
                });
            });
        });
    });
}

function saveBooks() {
    const jsonData = JSON.stringify(arrBooks);
    fs.writeFile("book.json", jsonData, (err) => {
        if (err) throw err;
        console.log("Books saved successfully.");
    });
}