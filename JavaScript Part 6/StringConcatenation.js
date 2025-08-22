let str = ["Hi", "I", "am", "Vaishnavi!"];

function Concat(str){
    let result = "";

    for(i = 0; i < str.length; i++){
        result+= str[i];
    }
    return result;
}