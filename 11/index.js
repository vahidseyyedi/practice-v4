const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var north = 0;
var south = 0;
var east = 0;
var west = 0;
var y = 0;
var x = 0;
var result = "";
add();
function add() {
    rl.question("Enter the direction(n:north / s:south / e:east / w:west)", (answer) => {
        switch (answer) {
            case "n": north++; break;
            case "s": south++; break;
            case "e": east++; break;
            case "w": west++; break;
            default: alert("no");
        }
        rl.question("continue?(y/n)", (an) => {
            if (an == "y" || an == "n") {
                if (an == "y") {
                    add();
                }
                else {
                    res();
                }
            } else {
                rl.close();
            }
        });
    });

}

function res() {
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