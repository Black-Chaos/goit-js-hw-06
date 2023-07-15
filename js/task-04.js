const btnIncrement = document.querySelector('[data-action="increment"]');
const btndecrement = document.querySelector('[data-action="decrement"]');
const valueRef = document.getElementById('value');
let counterValue = 0;

btnIncrement.addEventListener('click', () => valueRef.textContent = ++counterValue);
btndecrement.addEventListener('click', () => valueRef.textContent = --counterValue);