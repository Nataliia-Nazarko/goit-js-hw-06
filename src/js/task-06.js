const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputChange);

function onInputChange () {
    if (inputEl.textContent.length === inputEl.dataset.length) {
        document.querySelector('#validation-input').id = "validation-input.valid"; 
    } else {
        document.querySelector('#validation-input').id = "validation-input.invalid"; 
        
    }
};


