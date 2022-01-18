const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputChange);

function onInputChange () {
    if (inputEl.value.length == inputEl.dataset.length) {
        this.classList.add('valid'); 
        this.classList.remove('invalid'); 
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid'); 
    }
};


