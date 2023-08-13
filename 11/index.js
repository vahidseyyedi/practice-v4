const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let divisonH;
let leftOverH;
let min;
let leftOverM;
let leftOverS;
let re;
rl.question("please enter time : \n", (time) => {
    if (time < 0 || time > 359999) {
        console.log("no");
    } else {
        divisonH = Math.floor(time / 3600);
        leftOverH = time % 3600;
        min = Math.floor(leftOverH / 60);
        leftOverM = leftOverH % 60;
        leftOverS = Math.floor(leftOverM % 60);
        check(divisonH, min, leftOverS);
    }
});

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
    re = `${hour} : ${min} : ${sec}`
    console.log(re);
    rl.close();
}