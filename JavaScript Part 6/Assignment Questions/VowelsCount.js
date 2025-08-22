let stri = "Vaishnavi";

function vowelCounts(stri){
    let count = 0;
    stri = stri.toLowerCase(); // handle uppercase letters
    for(let i=0; i< str.length; i++){
        
        if( stri.charAt(i) == "a" ||
            stri.charAt(i) == "e" ||
            stri.charAt(i) == "i" ||
            stri.charAt(i) == "o" ||
            stri.charAt(i) == "u" )
        {
            count++;
        }
    }
    return count;
}

console.log(vowelCounts(stri));

