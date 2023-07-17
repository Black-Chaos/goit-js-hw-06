const input = document.getElementById('validation-input');
input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    console.log(input.dataset.length);
    input.className = input.value.length === Number(input.dataset.length) ? 'valid' : 'invalid'
}