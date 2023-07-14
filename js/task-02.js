const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsList = document.getElementById('ingredients');

function createListItem(array) {
  return array.map(el => {
    const item = document.createElement('li');
    const text = document.createElement('p');
    item.className = 'item';
    text.textContent = el;

    item.prepend(text);

    return item
  })
}

ingridientsList.prepend(...createListItem(ingredients))