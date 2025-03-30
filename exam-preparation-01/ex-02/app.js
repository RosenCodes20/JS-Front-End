window.addEventListener("load", solve);

function solve(){
    let event = document.getElementById('event');
    let note = document.getElementById('note');
    let date = document.getElementById('date');
    
    let save = document.getElementById('save');
    let upcoming = document.getElementById('upcoming-list');
    let eventsList = document.getElementById('events-list');
    
    let deleteBtn = document.querySelector("[class$='delete']");
    
    
    save.addEventListener('click', handleClickSaveBtn);
    deleteBtn.addEventListener('click', handleClickDeleteBtn);
    
    function handleClickSaveBtn() {
        if (!event.value.trim() || !note.value.trim() || !date.value.trim()) {
            event.value = '';
            note.value = '';
            date.value = '';
            return;
        }
        
        let newLi = document.createElement('li');
        newLi.classList.add('event-item');
        
        let newDiv = document.createElement('div');
        newDiv.classList.add('event-container');
        
        let newArticle = document.createElement('article');
        let nameP = document.createElement('p');
        let noteP = document.createElement('p');
        let dateP = document.createElement('p');
        
        nameP.textContent = `Name: ${event.value}`;
        noteP.textContent = `Note: ${note.value}`;
        dateP.textContent = `Date: ${date.value}`;
        
        newArticle.appendChild(nameP);
        newArticle.appendChild(noteP);
        newArticle.appendChild(dateP);
        
        newDiv.appendChild(newArticle);
        newLi.appendChild(newDiv);
        
        let btnDiv = document.createElement('div');
        let btnEdit = document.createElement('button');
        let btnDone = document.createElement('button');
        btnEdit.classList.add('btn');
        btnEdit.classList.add('edit');
        btnEdit.textContent = 'Edit';
        
        btnDone.classList.add('btn');
        btnDone.classList.add('done');
        btnDone.textContent = 'Done';
        
        btnDiv.classList.add('buttons');
        btnDiv.appendChild(btnEdit);
        btnDiv.appendChild(btnDone);
        
        newDiv.appendChild(btnDiv);
        upcoming.appendChild(newLi);

        event.value = '';
        note.value = '';
        date.value = '';
        
        btnEdit.addEventListener('click', handleEditBtnClick);
        btnDone.addEventListener('click', handleDoneBtnClick);
        
        function handleEditBtnClick(e) {
            let btnDiv = e.target.parentElement;
            let buttons = document.querySelectorAll('#upcoming-list button.edit');
            let idxOfBtnAndListItem = Array.from(buttons).indexOf(e.target);
            
            let listItem = Array.from(document.querySelectorAll('#upcoming-list li'))[idxOfBtnAndListItem];
            let pS = listItem.querySelectorAll('p');
            
            event.value = pS[0].textContent.replace('Name: ', '').trim();
            note.value = pS[1].textContent.replace('Note: ', '').trim();
            date.value = pS[2].textContent.replace('Date: ', '').trim();
            
            btnDiv.remove();
            listItem.remove();
        }
        
        function handleDoneBtnClick(e) {
            let buttons = document.querySelectorAll('#upcoming-list button.done');
            let btnDiv = e.target.parentElement;
            let idxOfBtnAndListItem = Array.from(buttons).indexOf(e.target);
            let listItem = Array.from(document.querySelectorAll('#upcoming-list li'))[idxOfBtnAndListItem];
            let pS = listItem.querySelectorAll('p');
            
            let newLi = document.createElement('li');
            newLi.classList.add('event-item');
            let newSect = document.createElement('article');
            let nameP = document.createElement('p');
            let noteP = document.createElement('p');
            let dateP = document.createElement('p');
            
            nameP.textContent = `Name: ${pS[0].textContent.replace('Name: ', '').trim()}`;
            noteP.textContent = `Note: ${pS[1].textContent.replace('Note: ', '').trim()}`;
            dateP.textContent = `Date: ${pS[2].textContent.replace('Date: ', '').trim()}`;
            
            newSect.appendChild(nameP);
            newSect.appendChild(noteP);
            newSect.appendChild(dateP);
            
            newLi.appendChild(newSect);
            
            eventsList.appendChild(newLi);
            
            btnDiv.remove();
            listItem.remove();
        }
    }
    
    function handleClickDeleteBtn() {
        while (eventsList.firstChild) {
            eventsList.removeChild(eventsList.firstChild);
        }
    }
}