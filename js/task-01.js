const categoryList = document.getElementById('categories');
console.log('элементов li.item:', categoryList.children.length);
const categoryItem = categoryList.querySelectorAll('.item');
categoryItem.forEach(el =>
    console.log(
        'Заголовок:',
        el.firstElementChild.textContent,
        '\nКількість елементів: ',
        el.lastElementChild.children.length
    )
);
