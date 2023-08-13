const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require('fs');
let arrBooks = [];

function receiveTitle() {
    return new Promise((resolve) => {
        rl.question("Book Title:", (answer) => {
            resolve(answer);
        });
    });
}

function receiveAuthor() {
    return new Promise((resolve) => {
        rl.question("Book Author:", (answer) => {
            resolve(answer);
        });
    });
}

function receivePages() {
    return new Promise((resolve) => {
        rl.question("Book Pages:", (answer) => {
            resolve(answer);
        });
    });
}

function continueApp() {
    return new Promise((resolve) => {
        rl.question("continue:(y/n)", (answer) => {
            resolve(answer);
        });
    });
}

async function receive() {
    let bookTitle = await receiveTitle();
    let bookAuthor = await receiveAuthor();
    let bookPages = await receivePages();
    const result = await continueApp();
    addBook(bookTitle , bookAuthor , bookPages);
    if(result == "y"){
        await receive();
    }else{
        saveBooks();
        rl.close();
    }
}

 function addBook(title , author , pages) {
    let book = {};
    book.title = title;
    book.author = author;
    book.pages = pages;
    arrBooks.push(book);
    console.log("-------------------");
    console.log(arrBooks);
    console.log("-------------------");
}

function saveBooks() {
    const jsonData = JSON.stringify(arrBooks);
    fs.writeFile("book.json", jsonData, (err) => {
        if (err) throw err;
        console.log("Books saved successfully.");
    });
}

receive();

















// addBook();

// function addBook() {
//     let book = {};
//     rl.question("Book title: ", (bookTitle) => {
//         rl.question("Book author: ", (bookAuthor) => {
//             rl.question("Book pages: ", (bookPages) => {
//                 book.title = bookTitle;
//                 book.author = bookAuthor;
//                 book.pages = bookPages;
//                 arrBooks.push(book);
//                 console.log("-------------------");
//                 console.log(arrBooks);
//                 rl.question("Continue? (y/n): ", (answer) => {
//                     if (answer === "y") {
//                         addBook();
//                     } else {
//                         console.log("Save");
//                         saveBooks();
//                     }
//                 });
//             });
//         });
//     });
// }

// function saveBooks() {
//     const jsonData = JSON.stringify(arrBooks);
//     fs.writeFile("book.json", jsonData, (err) => {
//         if (err) throw err;
//         console.log("Books saved successfully.");
//     });
// }