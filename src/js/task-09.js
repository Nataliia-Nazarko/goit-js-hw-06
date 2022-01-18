const changeColorBtnEl = document.querySelector(".change-color");

changeColorBtnEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector(".color").textContent = color;
}



