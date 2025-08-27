let para = document.querySelector("p");
para.addEventListener("click", function(){
    console.log("Paragraph is clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function(){
    console.log("mouse inside box");
});