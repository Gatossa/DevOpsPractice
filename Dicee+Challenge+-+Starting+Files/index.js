function setRandomDiceImage(image, randomNumber) {
  image.setAttribute("src", "images/dice" + randomNumber + ".png");
}

const images = document.querySelectorAll("img");
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

setRandomDiceImage(images[0], randomNumber1);
setRandomDiceImage(images[1], randomNumber2);

const resultText =
  randomNumber1 > randomNumber2
    ? "Player 1 wins!"
    : randomNumber1 < randomNumber2
    ? "Player 2 wins!"
    : "Draw!";

document.querySelector("H1").innerHTML = resultText;
