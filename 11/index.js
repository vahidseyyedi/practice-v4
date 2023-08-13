const { rejects } = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function receive(){
    return new Promise((resolve , rejects) =>{
        rl.question("please enter time : \n" , (time) =>{
            if(time < 0 || time > 359999 ){
                rejects();
            }else{
                resolve(time);
            }
        });
    });
}

async function calc(){
    const time = await receive()
    const hour = Math.floor(time / 3600);
    const leftOverH = time % 3600;
    const min = Math.floor(leftOverH / 60);
    const leftOverM = leftOverH % 60;
    const sec = Math.floor(leftOverM % 60);
    check(hour , min , sec);
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
    rl.close();
}

calc();