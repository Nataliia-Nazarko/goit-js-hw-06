const nameInputEl = document.querySelector("#name-input");

nameInputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
    document.querySelector("#name-output").textContent = event.currentTarget.value;
};