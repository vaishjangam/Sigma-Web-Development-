let nums = [223, 2334, 3243, 2331, 32];

let result = nums.reduce((min, el) =>{
    if(min <  el ){
        return min;
    }else{
        return el;
    }
});

console.log(result);