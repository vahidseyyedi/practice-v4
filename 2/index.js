let input = [];
let outPut = [];
const { rejects } = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function receive() {
    return new Promise((resolve, rejects) => {
        rl.question("please enter number :(exit : n) \n", (answer) => {
            if (answer == "n") {
                entrance();
                show();
                rl.close();
            } else {
                input.push(answer);
                receive();
            }
        });
    });
}

function entrance() {
    for (let i in input) {
        let result = check(input[i]);
        if (result != false) {
            outPut.push(result);
        }
    }
}

function check(number) {
    let isPrime = false;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = true;
        }
    }
    if (isPrime == true) {
        return false;
    } else {
        return number;
    }
}

function show() {
    console.log("-------------------");
    console.log(outPut);
}

receive();

