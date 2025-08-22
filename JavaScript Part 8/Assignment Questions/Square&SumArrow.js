console.log("Square and Sum using an arraow function");
let arr1 = [32, 34, 35, 54, 88, 87];

const square = arr1.map((num) => num * num);
console.log(square);

let sum = arr1.reduce((acc, el) => acc + el);
console.log(sum);

let avg = sum / arr1.length;
console.log(avg);