let newInput = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Click Me!";

document.querySelector("body").append(newInput);
document.querySelector("body").append(button);

newInput.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

let h1 = document.createElement("h1");
h1.innerText = "DOM practice";
h1.classList.add("h1Style");
document.querySelector("body").append(h1);

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Pactice";
document.querySelector("body").append(p);
