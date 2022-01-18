
const incremntButtonEL = document.querySelector("button[data-action=increment]");
const decremntButtonEL = document.querySelector("button[data-action=decrement]");

let counterValue = 0;

const onIncremntButtonClick = () => {
    document.querySelector("#value").textContent = ++counterValue;
};
incremntButtonEL.addEventListener("click", onIncremntButtonClick);

const onDecremntButtonClick = () => {
    document.querySelector("#value").textContent = --counterValue;
};
decremntButtonEL.addEventListener("click", onDecremntButtonClick);