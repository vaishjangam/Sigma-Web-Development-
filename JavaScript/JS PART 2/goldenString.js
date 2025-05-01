/*Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total
length greater than 5.
For a given string print if it is golden or not. */

let string = "Aishwarya Jangam";
if((string[0]== 'a' || string[0]== 'A') && String.length < 5){
    console.log("String is golden");
}else{
    console.log("String is not a golden!!!!!")
}