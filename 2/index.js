let input = [];
let outPut = [];
const { rejects } = require('assert');
const { resolve } = require('path');


function receive() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve, rejects) => {
        rl.question("enter number:(e : exit) \n", (answer) => {
            if (answer != "") {
                if (answer == "e") {
                    resolve("e");
                } else {
                    if (!Object.is(NaN, parseInt(answer))) {
                        resolve(parseInt(answer));
                    } else {
                        rejects("no")
                    }
                }
            }else{
                rejects("null");
            }
            rl.close();
        });
    });
}

async function verify() {
    try {
        const result = await receive();
        if (result == "e") {
            console.log("complete");
            calc();
            show();
        } else {
            input.push(result);
            verify();
        }

    } catch (err) {
        console.log(err);
    }
}
function calc() {
    for (let i in input) {
        let isPrime = false;
        for (let j = 2; j < input[i]; j++) {
            if (input[i] % j == 0) {
                isPrime = true;
            }
        }
        if (isPrime == false) {
            outPut.push(parseInt(input[i]));
        }
    }
}

function show() {
    console.log(outPut);
}

verify();































// function receive() {
//     return new Promise((resolve, rejects) => {
//         rl.question("please enter number :(exit : n) \n", (answer) => {
//             if (answer == "n") {
//                 entrance();
//                 show();
//                 rl.close();
//             } else {
//                 input.push(answer);
//                 receive();
//             }
//         });
//     });
// }

// function entrance() {
//     for (let i in input) {
//         let result = check(input[i]);
//         if (result != false) {
//             outPut.push(result);
//         }
//     }
// }

// function check(number) {
//     let isPrime = false;
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = true;
//         }
//     }
//     if (isPrime == true) {
//         return false;
//     } else {
//         return number;
//     }
// }

// function show() {
//     console.log("-------------------");
//     console.log(outPut);
// }

// receive();

