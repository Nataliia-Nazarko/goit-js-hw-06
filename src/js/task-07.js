const inputControlEl = document.querySelector('#font-size-control');

inputControlEl.addEventListener('input', onInputChange);

function onInputChange() {
    document.querySelector('#text').style.fontSize =  this.value + "px";
};


