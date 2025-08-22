console.log("rest in function parameter");

function addition (...nums) {
    return nums.reduce((total, n) => total + n);
}
console.log(addition(12, 23, 3, 4)); //42

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("rest with destructuring array ");

let [first, second, ...others] = [21, 23, 231, 34, 3, 1, 32];
console.log(first);
console.log(second);
console.log(others); //21
                    //23
                    //(5) [231, 34, 3, 1, 32]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("rest with destructuring object");

let person = {name1 : "Vaishnavi", age : 23, city: "Pune"} ;
let {name1, ...details} = person;
console.log(name1); //Vaishnavi
console.log(details); //{age: 23, city: 'Pune'}