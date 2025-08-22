console.log("Spread with array");

console.log("1. copying an array");
let n1 = [32, 4, 34, 35, 23];
let newN1 = [...n1];
console.log(newN1); //(5) [32, 4, 34, 35, 23] 
console.log(n1 === newN1); //false

//=====================================================//
console.log("2.merging array");
let n2 = [3, 22, 4, 2, 54, 2];
let newn2 = [32, 43, 12];
console.log(...n2, ...newn2); //3 22 4 2 54 2 32 43 12
//=====================================================//

console.log("3.adding new elements array");
let n3 = [4, 1, 3, 4, 2];
let newN3 = [23, ...n3, 32];
console.log(newN3); //(7) [23, 4, 1, 3, 4, 2, 32]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("Spread with string");
let word = "team";
let letters = [...word];
console.log(letters); //(4) ['t', 'e', 'a', 'm']

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("Spread with object");
console.log("1. copying an object");
let obj1 = {name: "vaish",  age : 23, city: "Pune" };
let objNew = {...obj1};
console.log(objNew);//{name: 'vaish', age: 23, city: 'Pune'}
//=====================================================//
console.log("2.merging object");
let obj2 = {name: "vaish",  age : 23, city: "Pune"  };
let obj2new = {gmail : "abc@gmail.com", state : "Maharashtra" };
let merge = {...obj2, ...obj2new};
console.log(merge);//{name: 'vaish', age: 23, city: 'Pune', gmail: 'abc@gmail.com', state: 'Maharashtra'}
//=====================================================//
console.log("3.adding new elements object");
let obj3 = {name: "vaish",  age : 23, city: "Pune"  };
let obj3new = {gmail : "abc@gmail.com", ...obj3 };
console.log(obj3new); //{gmail: 'abc@gmail.com', name: 'vaish', age: 23, city: 'Pune'}