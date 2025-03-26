function addItem() {
    let newLiInp = document.getElementById('newItemText').value;

    let newLi = document.createElement('li');
    let newA = document.createElement('a');
    
    newA.href = '#';
    
    newA.textContent = '[Delete]'
    
    newLi.textContent = newLiInp;
    newLi.appendChild(newA);

    let ul = document.getElementById('items');

    ul.appendChild(newLi);

    document.getElementById('newItemText').value = '';

    let deleteListItemEvent = newA.addEventListener('click', deleteListItem);

    function deleteListItem() {
        newLi.remove();
    }
}
