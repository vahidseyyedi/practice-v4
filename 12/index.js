
let north = 0;
let south = 0;
let east = 0;
let west = 0;
let y = 0;
let x = 0;
let result = "";

function getString(question) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            if (answer != "") {
                if (answer == "e" || answer == "s" || answer == "w" || answer == "n" || answer == "x") {
                    resolve(answer);
                } else {
                    reject("not found");
                }
            } else {
                reject("null");
            }
            rl.close();
        });
    });
}



async function verify() {
    try {
        const result = await getString("Enter the direction (n: north / s: south / e: east / w: west / x: exit)\n");
        switch(result){
            case "n" : {north++; verify();}break;
            case "s" : {south++; verify();}break;
            case "e" : {east++; verify();}break;
            case "w" : {west++; verify();}break;
            case "x" : {calc();}break;

        }
    } catch (err) {
        console.log(err);
    }
}

function calc() {
    y = north - south;
    x = east - west;
    if (y > 0) {
        result += "north =" + y + "|";
    } else {
        result += "south =" + Math.abs(y) + "|";
    }
    if (x > 0) {
        result += "east =" + x;
    } else {
        result += "west =" + Math.abs(x);
    }
    console.log(result);
}

verify();
