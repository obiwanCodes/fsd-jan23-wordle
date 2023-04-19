// Write your code here
import { getWord } from "./words";
import { game } from "../logic";
const word = getWord();
console.log(word);
const inputElement = document.getElementById("userInput");
const noOfLetters = 5;
const noOfChances = 6;
inputElement.addEventListener("keyup", (e) =>
  game(e, noOfLetters, noOfChances, word)
);