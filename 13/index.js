let arr = [2 , 0 , 5 , 0 , 4];

function test(arr) {
let zero = arr.filter(ele => ele == 0);
let notZero = arr.filter(ele => ele != 0);
return notZero.concat(zero);
}

console.log(test(arr));