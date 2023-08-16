
const fs = require('fs');
let arrBooks = [];

function getString(question) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            if (answer != "") {
                resolve(answer);
            } else {
                reject("null");
            }
            rl.close();
        });
    });
}

function getInt(question) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            if(answer == ""){
                reject("null");
            }else{
                if (!Object.is(NaN, parseInt(answer))) {
                resolve(parseInt(answer));
            } else {
                reject("not string");
            }
            }
            rl.close();
        });
    });

}


async function receive() {
    try{
        let bookTitle = await getString("enter book title: \n");
    let bookAuthor = await getString("enter book author: \n");
    let bookPages = await getInt("enter book pages: \n")
    const result = await getString("continue:(y/n) \n");
    addBook(bookTitle , bookAuthor , bookPages);
    if(result == "y"){
         receive();
    }else{
        saveBooks();
    }
    }catch(err){
        console.log(err);
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