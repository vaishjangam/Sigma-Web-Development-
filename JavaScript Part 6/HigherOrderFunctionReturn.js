function OddEvenChecker(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }

    else if(request == "even"){
        let even = function(n){
            console.log((n%2 == 0));
        }
        return even;
    }else{
        console.log("Wrong Request");
    }
}

let request = "odd";

// request
// 'odd'
// let func = OddEvenChecker(request);
// undefined
// func(9)
// HigherOrderFunctionReturn.js:4 true