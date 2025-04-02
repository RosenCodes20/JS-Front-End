window.addEventListener("load", solve);

function solve() {
    let email = document.getElementById('email');
    let event = document.getElementById('event');
    let location = document.getElementById('location');

    let nextBtn = document.getElementById('next-btn');
    let previewList = document.getElementById('preview-list');
    let eventsList = document.getElementById('event-list');
    nextBtn.addEventListener('click', handleClickNextBtn);

    function handleClickNextBtn(e) {
        e.preventDefault();

        if (!email.value || !event.value || !location.value) {
            return;
        }

        let newLi = document.createElement('li');
        nextBtn.disabled = true;
        newLi.classList.add('application');

        let newArt = document.createElement('article');
        let newH4 = document.createElement('h4');
        newH4.textContent = email.value;

        let newP = document.createElement('p');

        let newStrongElement = document.createElement('strong');
        newStrongElement.textContent = 'Event:';
        let newBr = document.createElement('br');
        let textNodeForFirstP = document.createTextNode(`${event.value}`);
        newP.appendChild(newStrongElement);
        newP.appendChild(newBr);
        newP.appendChild(textNodeForFirstP);

        let newSecondP = document.createElement('p');

        let newSecondStrongElement = document.createElement('strong');
        newSecondStrongElement.textContent = 'Location:';
        let newSecondBr = document.createElement('br');
        let textNodeForSecondP = document.createTextNode(`${location.value}`);
        newSecondP.appendChild(newSecondStrongElement);
        newSecondP.appendChild(newSecondBr);
        newSecondP.appendChild(textNodeForSecondP);

        newArt.appendChild(newH4);
        newArt.appendChild(newP);
        newArt.appendChild(newSecondP);
        newLi.appendChild(newArt);

        let editBtn = document.createElement('button');
        let doneBtn = document.createElement('button');

        editBtn.classList.add('action-btn', 'edit');
        editBtn.textContent = 'edit';
        doneBtn.classList.add('action-btn', 'apply');
        doneBtn.textContent = 'apply';

        newLi.appendChild(editBtn);
        newLi.appendChild(doneBtn);
        previewList.appendChild(newLi);

        email.value = '';
        event.value = '';
        location.value = '';

        editBtn.addEventListener('click', handleClickingEditBtn);
        doneBtn.addEventListener('click', handleClickDoneBtn);

        function handleClickingEditBtn(e) {
            e.preventDefault();
            nextBtn.disabled = false;
    
            let indexOfLiToGet = Array.from(document.querySelectorAll('[class$="edit"]')).indexOf(e.target);

            let allLis = Array.from(document.querySelectorAll('li'));

            let currentLi = allLis[indexOfLiToGet];
            
            let allPs = currentLi.querySelectorAll('p');
            let h4 = currentLi.querySelector('h4');
            currentLi.remove();

            email.value = h4.textContent;
            
            let firstP = allPs[0];
            event.value = firstP.textContent.split(':')[1];

            let secondP = allPs[1];
            location.value = secondP.textContent.split(':')[1];
        }

        function handleClickDoneBtn(e) {
            e.preventDefault();
            nextBtn.disabled = false;

            let indexOfLiToGet = Array.from(document.querySelectorAll('[class$="apply"]')).indexOf(e.target);
            let allLis = Array.from(document.querySelectorAll('li'));
            
            let currentLi = allLis[indexOfLiToGet];
            let editBtn = Array.from(document.querySelectorAll('[class$="edit"]'))[indexOfLiToGet];
            currentLi.removeChild(e.target);
            currentLi.removeChild(editBtn);
            currentLi.remove();
            
            eventsList.appendChild(currentLi);
        }
    }
}
