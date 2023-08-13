const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let pro = 1;

function receive() {
    return new Promise((resolve) => {
        rl.question("please enter number: \n", (answer) => {
            resolve(answer);
        });
    });
}

async function verify() {
    const result = await receive();
    if (result < 1) {
        console.log("no");
        await verify();
    }
    else {
        console.log(calc(result));
        rl.close();
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

// rl.question("please enter number: \n" , (num)=>{
// if(num <=0 )
// {
//     console.log("no");
//     rl.close();
// }else{
//     let pro = 1;

//     for (let i = num; i > 1; i--) {
//         pro = pro * i;
//     }
//     console.log("answer:" + pro);
// }
// });

