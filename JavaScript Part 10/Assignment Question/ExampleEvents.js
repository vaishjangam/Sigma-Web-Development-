let para = document.querySelector("#para");
 
para.addEventListener("mouseout", function(){
    alert("Mouse left the para");
});

let inp = document.querySelector("#inp");
 
inp.addEventListener("keypress", function(){
    alert("key is pressed");
});

let s = document.querySelector(".scrolls");
s.addEventListener("scroll", function(){
    console.log("You are scrolling!")
});

window.addEventListener("load", function(){
    this.alert("page fully loaded!")
})

let btn = document.createElement("button");
btn.innerText = "Click Here!";
document.body.appendChild(btn);
btn.addEventListener("click", function(){
    btn.style.backgroundColor = "green";
    btn.style.color ="white";
})