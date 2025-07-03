// function guessMovie(){
//     let FavMovie = "3 Idiots";
//     let guess = prompt("Guess my Favourite movie!");

//     while((FavMovie != guess) && (guess != "quit")){

//      guess = prompt(" Wrong guess!!!!!! Enter again:");
   
//     }

//     if(guess == FavMovie){
//      console.log("Congrats!!!");
//     }else{
//      console.log("You quit")
//     }
// }

function guessMovie(){
    let FavMovie = "3 Idiots";
    let guess = prompt("Guess my Favourite movie!");

    while((FavMovie != guess)){

        if(guess == "quit"){
            console.log("You Quit!!");
            break;
        }
     guess = prompt(" Wrong guess!!!!!! Enter again:");
   
    }

    if(guess == FavMovie){
     console.log("Congrats!!!");
    }
}