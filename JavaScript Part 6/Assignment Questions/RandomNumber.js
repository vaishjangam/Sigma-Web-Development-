let start = 100;
let end = 200;

function RandomNumber(start, end){
   let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(RandomNumber(start, end));