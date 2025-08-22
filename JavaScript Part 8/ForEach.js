// Eg. 1  for elements or values
console.log("adding function in variable")
let arr = [1, 2, 3, 4, 5];
let print = function(el) {
    console.log(el);
}

arr.forEach(print);

//////     OR   /////////////
console.log("using direct forEach method")
arr.forEach(function(el){
    console.log(el);
});

//////     OR   /////////////
console.log("using arrow function")
arr.forEach((el) =>{
    console.log(el);
});

console.log("=============== TO ACCESS OBJECT ELEMENTS =================") 

let studentInfo = [
    {
        name: "Vaishu",
        score: 98,
    },
    {
        name : "Vedant",
        score : 92,
    },
    {
        name : "Ved",
        score : 93,
    },
];

studentInfo.forEach((student)=> {
    console.log(student.name);
});