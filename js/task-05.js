const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', (e) => output.textContent = e.target.value ? e.target.value : 'Anonymous')