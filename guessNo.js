
// program where the user has to guess a number
const prompt = require("prompt-sync")({ sigint: true });
function guessNumber() {
  // generating a random integer from 1 to 10
  const randomNum = Math.floor(Math.random() * 10) + 1;

  // take input from the user
  let number = parseInt(prompt("Guess a number: "));

  // take the input until the guess is correct
  while (number !== randomNum) {
    number = parseInt(prompt("Guess a number: "));
  }

  // check if the guess is correct
  if (number == random) {
    console.log("correct.");
  }
}

// call the function
guessNumber();
