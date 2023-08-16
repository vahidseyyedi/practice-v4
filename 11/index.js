const { rejects } = require('assert');

function getInt(question) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            if (answer == "") {
                reject("null");
            } else {
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

async function verify() {
    try {
        const result = await getInt("enter time:\n");
        if ( result < 0 || result > 359999){
            console.log("no");
        }else{
            calc(result);
        }
    } catch (err) {
        console.log(err);
    }

}

 function calc(time) {
    const hour = Math.floor(time / 3600);
    const leftOverH = time % 3600;
    const min = Math.floor(leftOverH / 60);
    const leftOverM = leftOverH % 60;
    const sec = Math.floor(leftOverM % 60);
    check(hour, min, sec);
}

function check(hour, min, sec) {
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    const re = `${hour} : ${min} : ${sec}`
    console.log(re);
}

verify();