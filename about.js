console.log("connected to about.js");

const css = document.querySelector("h4");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const cards = document.getElementsByClassName("card");
console.log(cards);

function setGradient() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.background =
      "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent =
      "Set color to: " + color1.value + ", " + color2.value + ".";
  }
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
