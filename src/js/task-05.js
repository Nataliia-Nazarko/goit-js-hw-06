const nameInputEl = document.querySelector("#name-input");
const nameLabelEl = document.querySelector("#name-output");

nameInputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
    nameLabelEl.textContent = event.currentTarget.value;
};