let btns1 = document.querySelectorAll("button");


for( let btn1 of btns1){
    btn1.addEventListener("click", sayHello);
    btn1.addEventListener("click", sayName);
}
    


function sayHello(){
    alert("Hello");
}

function sayName(){
    alert("Vaishnavi");
}