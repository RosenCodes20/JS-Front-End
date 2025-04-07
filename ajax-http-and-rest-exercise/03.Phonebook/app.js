function attachEvents() {
    let btnLoad = document.getElementById('btnLoad');
    
    let btnCreate = document.getElementById('btnCreate');
    let phonebook = document.getElementById('phonebook');
    
    let person = document.getElementById('person');
    let phone = document.getElementById('phone');
    
    btnLoad.addEventListener('click', handleClickingBtnLoad);
    btnCreate.addEventListener('click', handleClickingCreateBtn);
    let url = 'http://localhost:3030/jsonstore/phonebook';
    
    async function handleClickingBtnLoad(e) {
        phonebook.replaceChildren();
        let res = await fetch(url);
        
        let data = await res.json();
        
        let values = Object.values(data);

        for (let value of values) {
            let newLi = document.createElement('li');
            newLi.textContent = `${value.person}: ${value.phone}`;
            let newBtn = document.createElement('button');
            newBtn.textContent = 'Delete';
            newLi.appendChild(newBtn);
            phonebook.appendChild(newLi);
            
            newBtn.addEventListener('click', handleClickingBtnDelete);
        }
    }
    
    async function handleClickingCreateBtn(e) {
        e.preventDefault();
        
        let object = {
            'person': person.value,
            'phone': phone.value,
        }
        
        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(object),
        }
        
        let res = await fetch(url, options);
        
        handleClickingBtnLoad()
        
        person.value = '';
        phone.value = '';
    }
    
    async function handleClickingBtnDelete(e) {
        e.preventDefault();
        
        let options = {
            method: 'delete',
        }
        
        let textContent = e.target.parentElement.textContent;
        
        let res = await fetch(url);
        let data = await res.json();
        
        let value = Object.values(data);
        
        for (let values of value) {
            if (values['person'] == textContent.split(': ')[0]) {
                let curUrl = 'http://localhost:3030/jsonstore/phonebook/' + values['_id'];
                await fetch(curUrl, options);
                e.target.parentElement.remove();
            }   
        }
    }
}

attachEvents();