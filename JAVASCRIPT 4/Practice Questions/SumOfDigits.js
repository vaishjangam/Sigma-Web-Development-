console.log("Q3. Sum of all digits");
let number1 = 287152;
let sum = 0;

let copy1 = number1;

while( copy1 > 0){

    let digit = copy1 % 10;
    sum +=  digit;
    copy = Math.floor(copy1 / 10);

}

console.log(sum);
