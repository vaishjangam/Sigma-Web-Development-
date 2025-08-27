let inp = document.querySelector("input");
let heading = document.querySelector("#display");

inp.addEventListener("input", function(){
    let text = inp.value;
    let newText = "";

    for(let i =0; i< text.length; i++){
        let ch = text[i];

        if((ch >= "a" && ch<= "z") || (ch >= "A" && ch <= "Z") || ch === " "){
            newText = newText + ch;

        }
    }

    inp.value = newText;
    if(newText === ""){
        heading.innerText = "Your name will appear here..."
    }else{
        heading.innerText = newText;
    }
});