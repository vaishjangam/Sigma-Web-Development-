const max = prompt("Enter max number ")
const random = Math.floor(Math.random()*max)+1;

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("User quitting!!");
        break;
    }

    if(guess == random){
        console.log("You guessed right number!! Congrats!!!! Random number is :"+ random);
        break;
    }else if(guess < random){
        guess = prompt("Your number is too small, Enter again!");
    }else{
        guess = prompt("Your number is too large, Enter again!");
    }
}