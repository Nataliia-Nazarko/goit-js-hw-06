const btnChangeColor = document.querySelector(".change-color");
const colorBody = document.querySelector("body");
const color = document.querySelector(".color");


btnChangeColor.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  
  colorBody.style.backgroundColor =`#${Math.floor(Math.random() * 16777215).toString(16)}`;

   
  return 
  
}



