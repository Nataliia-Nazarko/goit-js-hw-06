const inputEl = document.querySelector("#validation-input");


inputEl.addEventListener('blur', onInputChange);
function onInputChange () {
    if (inputEl.textContent === 6) {
        inputEl.style.borderColor = document.querySelector("#validation-input.valid");
    } else {
        inputEl.style.borderColor = document.querySelector("#validation-input.invalid");
    }
};


 

