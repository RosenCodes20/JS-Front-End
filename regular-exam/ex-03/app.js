function solve() {
    let loadHistory = document.getElementById('load-history');
    let list = document.getElementById('list');
    let addReservation = document.getElementById('add-reservation');
    let editReservation = document.getElementById('edit-reservation');
    let names = document.getElementById('names');
    let days = document.getElementById('days');
    let date = document.getElementById('date');
    let url = 'http://localhost:3030/jsonstore/reservations/';

    let editIt;

    loadHistory.addEventListener('click', handleClickingLoadHistory);
    addReservation.addEventListener('click', handleClickingAddReservation);
    editReservation.addEventListener('click', handleClickingEditBtn);

    async function handleClickingLoadHistory() {
        list.replaceChildren();

        let res = await fetch(url);
        let data = await res.json();

        let values = Object.values(data);
        console.log(values)
        for (let value of values) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('container');

            newDiv.dataset.id = value._id;

            newDiv.innerHTML = `
            <h2>${value.names}</h2>
            <h3>${value.date}</h3>
            <h3 id="reservation_days">${value.days}</h3>
            <div class="buttons-container">
                <button class="change-btn">Change</button>
                <button class="delete-btn">Delete</button>
            </div>
            `;

            list.appendChild(newDiv);

            let deleteBtn = newDiv.querySelector('[class="delete-btn"]');
            let changeBtn = newDiv.querySelector('[class="change-btn"]');

            deleteBtn.addEventListener('click', handleClickingDelete);
            changeBtn.addEventListener('click', handleClickingChangeBtn);

            async function handleClickingDelete() {
                let options = {
                    'method': 'delete'
                };

                let res = await fetch(url + newDiv.dataset.id, options);
                newDiv.remove();
            }

            async function handleClickingChangeBtn() {
                names.value = newDiv.children[0].textContent;
                days.value = newDiv.children[2].textContent;
                date.value = newDiv.children[1].textContent;

                editIt = newDiv.dataset.id;

                newDiv.remove();

                editReservation.disabled = false;
                addReservation.disabled = true;
            }
        }
    }

    async function handleClickingEditBtn() {
        let object = {
            'names': names.value,
            'date': date.value,
            'days': days.value,
        };

        let options = {
            'method': 'put',
            'headers': {
                'Content-type': 'application/json',
            },
            'body': JSON.stringify(object),
        };

        let res = await fetch(url + editIt, options);

        names.value = '';
        date.value = '';
        days.value = '';

        addReservation.disabled = false;
        editReservation.disabled = true;

        await handleClickingLoadHistory();
    }

    async function handleClickingAddReservation() {
        let object = {
            'names': names.value,
            'date': date.value,
            'days': days.value,
        };

        let options = {
            'method': 'post',
            'headers': {
                'Content-type': 'application/json',
            },
            'body': JSON.stringify(object),
        };

        let res = await fetch(url, options);

        names.value = '';
        date.value = '';
        days.value = '';

        await handleClickingLoadHistory();
    }
}

solve();