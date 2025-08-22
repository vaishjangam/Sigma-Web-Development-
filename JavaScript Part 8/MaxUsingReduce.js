let nums = [32, 43, 454, 984];

let result = nums.reduce((max, element) => {
    if(element > max){
        return element;
    }else{
        return max;
    }
});
console.log(result);