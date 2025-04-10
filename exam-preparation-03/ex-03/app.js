function solve() {
    let loadAppoiments = document.getElementById('load-appointments');
    let carModel = document.getElementById('car-model');
    let carService = document.getElementById('car-service');
    let date = document.getElementById('date');
    let appointmentsList = document.getElementById('appointments-list');
    let addAppointment = document.getElementById('add-appointment');
    let editAppointment = document.getElementById('edit-appointment');
    let url = 'http://localhost:3030/jsonstore/appointments/';

    let editElementId;

    loadAppoiments.addEventListener('click', handleClickingLoadAppoiments);
    addAppointment.addEventListener('click', handleClickingAddAppointment);

    async function handleClickingLoadAppoiments() {
        appointmentsList.replaceChildren();
        let res = await fetch(url);

        let data = await res.json();

        let values = Object.values(data);

        for (let value of values) {
            let newLi = document.createElement('li');
            newLi.classList.add('appointment');

            newLi.innerHTML = `
            <h2>${value.model}</h2>
            <h3>${value.date}</h3>
            <h3>${value.service}</h3>
            <div class="buttons-appointment">
                <button class="change-btn">Change</button>
                <button class="delete-btn">Delete</button>
            </div>
            `;

            appointmentsList.appendChild(newLi);

            let changeBtn = newLi.querySelector('[class="change-btn"]');
            let deleteBtn = newLi.querySelector('[class="delete-btn"]');

            changeBtn.addEventListener('click', handleClickingChangeBtn);
            deleteBtn.addEventListener('click', handleClickingDeleteBtn);

            async function handleClickingChangeBtn() {
                carModel.value = newLi.children[0].textContent;
                carService.value = newLi.children[2].textContent;
                date.value = newLi.children[1].textContent;

                newLi.remove();


                editElementId = value._id;

                addAppointment.disabled = true;
                editAppointment.disabled = false;
            }

            async function handleClickingDeleteBtn() {
                let options = {
                    'method': 'delete'
                };

                let res = await fetch(url + value._id, options);

                newLi.remove();
            }
        }
    }

    editAppointment.addEventListener('click', handleClickingEdit);

    async function handleClickingEdit() {
        let object = {
            'date': date.value,
            'service': carService.value,
            'model': carModel.value,
        };

        let options = {
            'method': 'put',
            'headers': {
                'Content-type': 'application/json',
            },
            'body': JSON.stringify(object),
        };

        let res = await fetch(url + editElementId, options);

        carModel.value = '';
        carService.value = '';
        date.value = '';

        addAppointment.disabled = false;
        editAppointment.disabled = true;

        await handleClickingLoadAppoiments();
    }

    async function handleClickingAddAppointment() {
        let object = {
            'date': date.value,
            'service': carService.value,
            'model': carModel.value,
        };

        let options = {
            'method': 'post',
            'headers': {
                'Content-type': 'application/json',
            },
            'body': JSON.stringify(object),
        }

        let res = await fetch(url, options);

        carModel.value = '';
        carService.value = '';
        date.value = '';

        await handleClickingLoadAppoiments();
    }
}

solve();