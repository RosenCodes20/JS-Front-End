function solve() {
    let loadMatches = document.getElementById('load-matches');
    let list = document.getElementById('list');
    let host = document.getElementById('host');
    let score = document.getElementById('score');
    let guest = document.getElementById('guest');
    let addMatch = document.getElementById('add-match');
    let editMatch = document.getElementById('edit-match');
    let url = 'http://localhost:3030/jsonstore/matches/';
    let currentEditId;
    
    loadMatches.addEventListener('click', handleClickingLoadMatches);
    addMatch.addEventListener('click', handleClickingAddMatch)
    
    list.replaceChildren();
    
    async function handleClickingLoadMatches() {
        list.replaceChildren();
        let res = await fetch(url);
        let data = await res.json();
        
        let values = Object.values(data);
        
        for (let value of values) {
            let newLi = document.createElement('li');
            newLi.classList.add('match');
            newLi.dataset.id = value._id
            newLi.innerHTML = `
            <div class="info">
                <p>${value.host}</p>
                <p>${value.score}</p>
                <p>${value.guest}</p>
            </div>
            <div class="btn-wrapper">
                <button class="change-btn">Change</button>
                <button class="delete-btn">Delete</button>
            </div>`
            
            list.appendChild(newLi);
            
            let changeBtn = newLi.querySelector('[class="change-btn"]');
            let deleteBtn = newLi.querySelector('[class="delete-btn"]');
            
            changeBtn.addEventListener('click', handleClickingChangeBtn);
            deleteBtn.addEventListener('click', handleClickingDelete);
            
            async function handleClickingChangeBtn() {
                addMatch.disabled = true;
                editMatch.disabled = false;
                
                host.value = value.host;
                score.value = value.score;
                guest.value = value.guest;

                currentEditId = value._id;
                
                newLi.remove();
            }
            
            async function handleClickingDelete(e) {
                let options = {
                    'method': 'delete',
                }
                
                let res = await fetch(url + newLi.dataset.id, options);
                newLi.remove();
            }
        }
    }
    
    editMatch.addEventListener('click', handleClickingEdit);

    async function handleClickingEdit() {
        let object = {
            'host': host.value,
            'score': score.value,
            'guest': guest.value,
        }
        
        let options = {
            'method': 'put',
            'headers': {
                'Content-type': 'application/json'
            },
            'body': JSON.stringify(object)
        };
        
        let res = await fetch(url + currentEditId, options);
        
        addMatch.disabled = false;
        editMatch.disabled = true;

        host.value = '';
        score.value = '';
        guest.value = '';
        
        await handleClickingLoadMatches();
    }
    
    async function handleClickingAddMatch() {
        let object = {
            'host': host.value,
            'score': score.value,
            'guest': guest.value,
        }
        
        let options = {
            'method': 'post',
            'headers': {
                'Content-type': 'application/json'
            },
            'body': JSON.stringify(object)
        };
        
        let res = await fetch(url, options);
        
        host.value = '';
        score.value = '';
        guest.value = '';
        
        await handleClickingLoadMatches();
    }
}

solve();