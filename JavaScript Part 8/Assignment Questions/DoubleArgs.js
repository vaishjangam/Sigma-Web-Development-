console.log("The function should return a new array with the original array values and all of the additional arguments doubled.");


function doubleAndReturnArgs(arr, ...args){
    return [...arr, ...args.map(num => num*2)];
}

console.log(doubleAndReturnArgs([1, 2, 4, 5], 4, 4));
console.log(doubleAndReturnArgs([34], 2, 3, 4));