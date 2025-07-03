let arr = [1, 3, 42, 21, 43, 4543];

let largest = 0;

for( i =0; i < arr.length; i++){
    if( largest < arr[i]){
        largest = arr[i];
    }
}
console.log(largest);