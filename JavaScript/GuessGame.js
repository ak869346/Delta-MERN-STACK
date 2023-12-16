const max = prompt("Enter the maximum number");
const rand = Math.floor(Math.random()*max)+1;
let guess = prompt("Enter the guess number");

while(true) {
    if(guess=="quitr") {
        alert("User Quit");
        break;
    }

    if(guess==rand) {
       alert("You are right! Congrats random number was",rand);
       break;
    }
    else if(guess<rand) {
        guess = prompt("Your number is small ! Try Again");
    }
    else {
        guess = prompt("Your Number is Greater . Please Try Again");
    }
}