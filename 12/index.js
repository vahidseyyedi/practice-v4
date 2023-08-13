const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let north = 0;
let south = 0;
let east = 0;
let west = 0;
let y = 0;
let x = 0;
let result = "";

function message() {
    return new Promise((resolve) => {
        rl.question("Enter the direction (n: north / s: south / e: east / w: west / x: exit)\n", (answer) => {
            switch (answer) {
                case "n":
                    north++;
                    message().then(resolve);
                    break;
                case "s":
                    south++;
                    message().then(resolve);
                    break;
                case "e":
                    east++;
                    message().then(resolve);
                    break;
                case "w":
                    west++;
                    message().then(resolve);
                    break;
                case "x":
                    resolve(true);
                    break;
                default:
                    resolve(false);
            }
        });
    });
}

function show() {
    return new Promise(async (resolve) => {
        const shouldContinue = await message();
        if (shouldContinue) {
            calc();
        } else {
            console.log("Invalid direction. Please try again.");
            show().then(resolve);
        }
    });
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
    rl.close();
}

show();
