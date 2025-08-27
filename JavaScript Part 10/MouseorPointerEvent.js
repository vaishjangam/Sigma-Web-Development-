let btns = document.querySelectorAll("button");

for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function(){
        console.log("You entered a button!");
    }
    // btn.ondblclick = function(){
    //     console.log("You dbl clicked a button!");
    // }
}


function sayHello(){
    alert("Hello");
}

