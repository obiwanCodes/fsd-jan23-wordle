// Write your code here
import { getWord } from ".words6";
import { game } from "../logic";
const word = getWord();
console.log(word);
const inputElement = document.getElementById("userInput");
const noOfLetters = 6;
const noOfChances = 8;
inputElement.addEventListener("keyup", (e) =>
  game(e, noOfLetters, noOfChances, word)
);