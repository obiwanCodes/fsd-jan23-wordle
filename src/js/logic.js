import { addTile, gameOver, gameWon } from "./tiles";
import { isInDictionary } from "./level5/words";
const chancesBox = document.getElementById("noOfChances");
export const game = (e, noOfLetters, totalChances, word) => {
  let guess = e.target.value.toLowerCase();
  if (e.key === "Enter" && guess.length === noOfLetters && totalChances > 0) {
    if (guess === word) {
      gameWon(guess);
      setTimeout(() => (window.location.href = "../level6.html"), 2000);
      return;
    }
    //if the word is in the dictionary
    if (isInDictionary(guess)) {
      guess.split("").forEach((letter, index) => {
        if (word.includes(letter) && letter === word[index])
          addTile(letter, "green");
        else if (word.includes(letter)) addTile(letter, "orange");
        else {
          addTile(letter, "grey");
        }
      });
      totalChances--;
      chancesBox.textContent = `Chances left = ${totalChances}`;
      e.target.value = "";
    } else {
      e.target.value = "";
    }
  }
  if (totalChances === 0) {
    gameOver();
    setTimeout(() => window.location.reload(), 2000);
    return;
  }
};
