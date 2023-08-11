const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("please enter number: \n" , (num)=>{
if(num <=0 )
{
    console.log("no");
    rl.close();
}else{
    var pro = 1;

    for (let i = num; i > 1; i--) {
        pro = pro * i;
    }
    console.log("answer:" + pro);
}
});

