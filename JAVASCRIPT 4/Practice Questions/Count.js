console.log("Q.2 Count of digits in a number: ");

let number = 287152;

let count=0;

let copy = number;

while(copy > 0){
    
    count++;
    copy = Math.floor(copy/10);      

}

console.log("total count:", count);