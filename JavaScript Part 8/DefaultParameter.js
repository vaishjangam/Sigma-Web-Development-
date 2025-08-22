console.log("With default parameter ");

function add(a, b = 8) {

    return a+b;
}
console.log(add(1)); // 9 (1+8)
console.log(add(1, 2)); // 3(1+2)
//////////////////////////////////////////////////////
console.log("With multiple default parameter ");

function add(a=9, b = 8) {

    return a+b;
}
console.log(add()); // 17 (9+8)
console.log(add(1, 2)); // 3 (1+2)
//////////////////////////////////////////////////////
console.log("With only first argument having default value ");
function add(a = 2, b) {

    return a+b;
}
console.log(add(1)); // NaN  As a =2 but b = undefined
console.log(add(1, 2)); // 3

