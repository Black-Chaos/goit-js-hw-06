const controls = {
    input: document.querySelector('#controls input'),
    create: document.querySelector('[data-create]'),
    destroy: document.querySelector('[data-destroy]'),
};
controls.create.addEventListener('click', handleCreate)
controls.destroy.addEventListener('click', destroyBoxes);
const boxes = document.getElementById('boxes');
let prevSize = 30;



function handleCreate() {
  let amount = Number(controls.input.value);
  const min = Number(controls.input.min);
  const max = Number(controls.input.max);
  if (amount >= max || amount <= min) {
    controls.input.value = '';
    controls.input.placeholder = '0 - 100';
    return
  }
    boxes.append(...createBoxes(amount));
}

function createBoxes(amount) {
  const els = [];
  for (let i = 0; i < amount; i++) {
    const el = document.createElement('div');
    el.style.backgroundColor = getRandomHexColor();
    el.style.width = `${prevSize}px`;
    el.style.height = `${prevSize}px`;
    els.push(el)
    prevSize += 10
  }
  return els
}

function destroyBoxes() {
    controls.input.value = '';
  boxes.innerHTML = '';
  prevSize = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
