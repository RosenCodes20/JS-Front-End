function addItem() {
    let newListInput = document.getElementById('newItemText');
    let newListInputValue = newListInput.value;

    let newLi = document.createElement('li');
    newLi.textContent = newListInputValue;

    let ul = document.getElementById('items');

    ul.appendChild(newLi);

    newListInput.value = '';
}
