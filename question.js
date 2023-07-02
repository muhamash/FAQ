const switchOne = document.getElementById("switch-one");
const switchTwo = document.getElementById("switch-two");
const switchThree = document.getElementById("switch-three");
const switchFour = document.getElementById("switch-four");

const switchOneDiv = document.getElementById("switch-one-div");
const switchTwoDiv = document.getElementById("switch-two-div");
const switchThreeDiv = document.getElementById("switch-three-div");
const switchFourDiv = document.getElementById("switch-four-div");

switchOne.addEventListener("click", () => {
  switchOneDiv.classList.remove("hidden");
  switchTwoDiv.classList.add("hidden");
  switchThreeDiv.classList.add("hidden");
  switchFourDiv.classList.add("hidden");
});

switchTwo.addEventListener("click", () => {
  switchOneDiv.classList.add("hidden");
  switchTwoDiv.classList.remove("hidden");
  switchThreeDiv.classList.add("hidden");
  switchFourDiv.classList.add("hidden");
});

switchThree.addEventListener("click", () => {
  switchOneDiv.classList.add("hidden");
  switchTwoDiv.classList.add("hidden");
  switchThreeDiv.classList.remove("hidden");
  switchFourDiv.classList.add("hidden");
});

switchFour.addEventListener("click", () => {
  switchOneDiv.classList.add("hidden");
  switchTwoDiv.classList.add("hidden");
  switchThreeDiv.classList.add("hidden");
  switchFourDiv.classList.remove("hidden");
});