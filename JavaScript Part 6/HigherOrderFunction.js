function Multiplegreeting(func, count){
    for(let i=1; i<=count; i++){
        func();
    }
}

let greet = function(){
    console.log("Hello");
}

Multiplegreeting(greet, 10);
