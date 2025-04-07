function solve() {
    let submit = document.getElementById('submit');
    let firstNameInput = document.querySelector('[name="firstName"]');
    let lastNameInput = document.querySelector('[name="lastName"]');
    let facultyNumberInput = document.querySelector('[name="facultyNumber"]');
    let gradeInput = document.querySelector('[name="grade"]');
    let tbody = document.querySelector('#results > tbody');
    let url = 'http://localhost:3030/jsonstore/collections/students';

    submit.addEventListener('click', handleClickingSubmitBtn);

    async function handleData() {
        let resForGetOptions = await fetch(url);
        let dataForGet = await resForGetOptions.json();
        
        console.log(dataForGet);

        let values = Object.values(dataForGet);

        for (let value of values) {
            let newTableRow = document.createElement('tr');
            let firstNameTd = document.createElement('td');
            firstNameTd.textContent = value.firstName;

            let lastNameTd = document.createElement('td');
            lastNameTd.textContent = value.lastName;

            let facultyNumberTd = document.createElement('td');
            facultyNumberTd.textContent = value.facultyNumber;

            let gradeTd = document.createElement('td');
            gradeTd.textContent = value.grade;


            newTableRow.appendChild(firstNameTd);
            newTableRow.appendChild(lastNameTd);
            newTableRow.appendChild(facultyNumberTd);
            newTableRow.appendChild(gradeTd);

            tbody.appendChild(newTableRow);
        }
    }

    async function handleClickingSubmitBtn(e) {
        e.preventDefault();

        if (!firstNameInput.value || !lastNameInput.value || !facultyNumberInput.value || !gradeInput.value) {
            return;
        }

        tbody.replaceChildren();

        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let facultyNumber = facultyNumberInput.value;
        let grade = gradeInput.value;

        let object = {
            firstName,
            lastName,
            facultyNumber,
            grade,
        }

        let options = {
            'method': 'post',
            'headers': {
                "Content-type": "application/json; charset=UTF-8"
            },
            'body': JSON.stringify(object),
        };

        let res = await fetch(url, options); 

        firstNameInput.value = '';
        lastNameInput.value = '';
        facultyNumberInput.value = '';
        gradeInput.value = '';
        handleData();
    }
    handleData();
}

solve()