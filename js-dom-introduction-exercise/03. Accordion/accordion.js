function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let textToAdd = document.getElementById('extra');

    if (button.textContent == 'More') {
    
        textToAdd.style.display = 'block';
    
        button.textContent = 'Less';

    } else if (button.textContent == 'Less') {
        textToAdd.style.display = 'none';
        
        button.textContent = 'More';
    }

}