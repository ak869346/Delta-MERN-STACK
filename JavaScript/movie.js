let fav = "Aspirants";
let guess = prompt("Enter your movie");
while((guess!=fav)) {
    if(guess=="quit") {
        alert("Why you Quit Try Again");
    }
    guess = prompt(" Wrong guess! Enter your movie");
}

if(guess==fav) {
    alert("Congratulation Your guess is correct");
}
