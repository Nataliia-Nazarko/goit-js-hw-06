const inputControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputControlEl.addEventListener('input', onInputChange);
textEl.style.fontSize =  inputControlEl.value + "px";
function onInputChange() {
    textEl.style.fontSize =  this.value + "px";
};


