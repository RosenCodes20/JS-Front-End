window.addEventListener("load", solve);

function solve() {
    let addBtn = document.getElementById('add_btn');
    let firstName = document.getElementById('first_name');
    let lastName = document.getElementById('last_name');
    let phone = document.getElementById('phone');
    let pendingContactList = document.getElementById('pending_contact_list');
    let contactList = document.getElementById('contact_list');

    addBtn.addEventListener('click', handleClickingAddBtn);

    function handleClickingAddBtn(e) {
        e.preventDefault();

        let newLi = document.createElement('li');
        newLi.classList.add('contact');

        newLi.innerHTML = `
        <span class="names">${firstName.value} ${lastName.value}</span>
        <span class="phone_number">${phone.value}</span>
        <button class="edit_btn">Edit</button>
        <button class="verify_btn">Verify</button>
        `;

        pendingContactList.appendChild(newLi);

        firstName.value = '';
        lastName.value = '';
        phone.value = '';

        let editBtn = newLi.querySelector('[class="edit_btn"]');
        let verifyBtn  = newLi.querySelector('[class="verify_btn"]');

        editBtn.addEventListener('click', handleClickingEditBtn);
        verifyBtn.addEventListener('click', handleClickinVerify);

        function handleClickingEditBtn(e) {
            e.preventDefault();

            firstName.value = newLi.children[0].textContent.split(' ')[0];
            lastName.value = newLi.children[0].textContent.split(' ')[1];
            phone.value = newLi.children[1].textContent;

            newLi.remove();
        }

        function handleClickinVerify(e) {
            e.preventDefault();

            let currLi = document.createElement('li');
            currLi.classList.add('verified_contact');

            currLi.innerHTML = `
            <span class="names">${newLi.children[0].textContent.split(' ')[0]} ${newLi.children[0].textContent.split(' ')[1]}</span>
            <span class="phone_number">${newLi.children[1].textContent}</span>
            <button class="delete_btn">Delete</button>
            `;

            contactList.appendChild(currLi);

            newLi.remove();

            let deleteBtn = currLi.querySelector('[class="delete_btn"]');

            deleteBtn.addEventListener('click', handleClickingDeleteBtn);

            function handleClickingDeleteBtn(e) {
                e.preventDefault();

                currLi.remove();
            }
        }
    }
};
