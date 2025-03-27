document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    let select = document.getElementById('menu');    
    let button = document.querySelector("[type='submit']");
    
    button.addEventListener('click', handleButtonClick);
    
    function handleButtonClick(event) {
        event.preventDefault();
        let newOption = document.createElement('option');
        newOption.textContent = newItemText.value;
        newOption.value = newItemValue.value;

        select.appendChild(newOption);

        newItemText.value = '';
        newItemValue.value = '';
    }
}