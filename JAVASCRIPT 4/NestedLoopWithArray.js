// let Heros = [
//     ["Iron Man", "Spider Man", "Hulk"],
//      ["Wonder Woman", "Superman", "Batman"]
//     ]
// for(let i = 0; i < Heros.length; i++){
//     console.log(i, Heros[i],Heros[i].length);

//     for(let j = 0; j < Heros[i].length; j++){
//         console.log(` j = ${j}, ${Heros[i][j]}`);
//     }
// }


let students = [
    ["vaishnavi",97], ["Vedant", 98], ["Ashish", 99]
]

for(i=0; i<students.length; i++){
    console.log(`Student Information #${i+1}`);

    for(let j=0; j<students[i].length; j++){
        console.log(students[i][j]);
    }
}