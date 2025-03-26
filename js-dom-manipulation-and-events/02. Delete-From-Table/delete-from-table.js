function deleteByEmail() {
    let emailValue = document.querySelector("[name='email']").value;

    let tableRows = Array.from(document.querySelectorAll('tbody tr'));

    let tbody = document.querySelector('tbody');

    let result = document.getElementById('result');

    let isDeleted = false;

    for (let row of tableRows) {
        let email = row.children[1].textContent;

        if (email == emailValue) {
            tbody.removeChild(row);
            isDeleted = true;
        }
    }

    if (isDeleted) {
        result.textContent = 'Deleted';
    } else {
        result.textContent = 'Not found.'
    }
    document.querySelector("[name='email']").value = '';
}
