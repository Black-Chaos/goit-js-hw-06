function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color')

colorBtn.addEventListener('click', onChangeBodyColor)

function onChangeBodyColor() {
  const color = getRandomHexColor()
  document.body.style.backgroundColor = color;
  colorValue.textContent = color
}