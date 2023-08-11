let arr = [];
let outPut = [];

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
add();
function add() {
    rl.question("please enter number : \n", (num) => {
        arr.push(num);
        rl.question("continue?(y/n)", (answer) => {
            if (answer == "y") {
                add();
            } else {
                rl.question("show");
                primeNumber();
            }
        })
    });

}

function primeNumber() {
    for (let i in arr) {
        let index = false;

        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j == 0) {
                index = true;
            }
        }
        if (index == false) {
            outPut.push(arr[i]);
        }
    }
    let q = "";
    for (let i in outPut) {
        q += outPut[i] + "|";
        console.log(outPut[i])
    }
}
