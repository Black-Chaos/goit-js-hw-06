const input = document.getElementById('font-size-control');
const text = document.getElementById('text')

input.addEventListener('input', e => text.style.fontSize = `${e.target.value}px`);