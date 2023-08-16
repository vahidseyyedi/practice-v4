const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let pro = 1;

function receive() {
    return new Promise((resolve, reject) => {
        rl.question("please enter number: \n", (answer) => {
            if (answer == "") {
                reject("null");
            } else {
                if (!Object.is(NaN, parseInt(answer))) {
                    resolve(parseInt(answer));
                } else {
                    reject("no string");
                }
            }
            rl.close();
        });
    });
}

async function verify() {
    try {
        const result = await receive();
        if (result < 1) {
            console.log("no");
            await verify();
        }
        else {
            console.log(calc(result));
        }
    } catch (err) {
        console.log("error: " + err);
    }
}

function calc(number) {
    if (number == 0) {
        return pro;
    } else {
        pro = pro * number;
        return calc(number - 1);
    }
}

verify();

