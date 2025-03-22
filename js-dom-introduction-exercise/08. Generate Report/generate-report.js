function solve() {
    let input = document.querySelectorAll('input');

    let tableData = document.querySelectorAll('tbody > tr');
    
    let result = [];
    for (let row of tableData) {
        object = {};
        let cells = row.querySelectorAll('td');

        for (let i = 0; i < cells.length; i++) {
            if (input[i].checked) {
                let columnName = input[i].parentElement.textContent.toLowerCase().trim();
                object[columnName] = cells[i].textContent.trim();
            }
        }

        result.push(object);
    }

    let output = document.getElementById('output');

    output.value = JSON.stringify(result);
}