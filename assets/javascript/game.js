// // Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
// Use key events to listen for the letters that your players will type.
// Display the following on the page:
// Press any key to get started!
// Wins: (# of times user guessed the word correctly).



// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
// As the user guesses the correct letters, reveal them: m a d o _  _ a.



// Number of Guesses Remaining: (# of guesses remaining for the user).
// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
// After the user wins / loses the game should automatically choose another word and make the user play it.
// compare user guess to the chosen word from animal list and loop over it to compare
// keep track if wrong take away guessLeft, if wright print it on the screen to html
// if all guessed correctly user won show pic of an animal, if lost start again
// set arrays for each animal and if the letter is guessed correctly display in an open slot for it.
//once the word is guessed show the picture corresponding to the animal
//starts the screen -reset the game-pick an animal-check the user guess against thetries left. create a var of correct guesses if the same that with current
//global variables, functions, events
var wins = 0;
var losses = 0;
var userGuess = [];
var guessLeft = 15;
var animalList = ["elephant", "monkey", "tiger", "panda", "zebra"];
var computerGuess;
var correctGuesses = [];

// vars for quick reference to html
var directionsText = document.getElementById("directions");
var userChoiceText = document.getElementById("user-choice");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");

function resetGame() {
    //display a pic of correct animal guessed
    guessLeft = 15;
    correctGuesses = [];
    computerGuess = animalList[Math.floor(Math.random() * animalList.length)].split("");
    for (var i = 0; i < computerGuess.length; i++) {
        correctGuesses.push("_");
    }
    console.log(correctGuesses);
    console.log(computerGuess);
}
// function checkIn() {
//     if (userGuess === animal[i]) {
//         console.log(animal)
//     }
// }

for (var i = 0; i < animal.length; i++) {
    console.log(animal[i])
}


document.onkeyup = function (event) {
    if (wins === 0 && losses === 0 && userGuess === 0) {
        resetGame();
    }
    userGuess.push(event.key);


    console.log(userGuess);




}
// if (animal.includes(userGuess)) {
//     console.log(yes);
// } else {
//     console.log(no);
// }
// directionsText.textContent = "";
// userChoiceText.textContent = "You chose: " + userGuess;
// winsText.textContent = "Wins: " + wins;
// lossesText.textContent = "Losses: " + losses;
// tiesText.textContent = "Ties: " + ties;
// } else {
//     alert("Not a valid guess... try again!");
// }
