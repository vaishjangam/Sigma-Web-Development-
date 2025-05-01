//Qs5. Write a program to find the largest of 3 numbers

let a=5;
let b = 3;
let c = 23;

if(a > b && a > c){
    console.log(`${a} is the largest`);
}else if(a < b && b > c){
    console.log(`${b} is the largest`);
}else{
    console.log(`${c} is the largest`);
}