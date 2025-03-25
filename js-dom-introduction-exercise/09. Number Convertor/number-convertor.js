function solve() {
    let number = parseInt(document.getElementById('input').value, 10);

    let selectedValue = document.getElementById('selectMenuTo').value;
    let result;

    if (!number || !selectedValue || isNaN(number)) {
        return;
    }

    if (selectedValue == 'binary') {
        result = number.toString(2);
    } else if (selectedValue == 'hexadecimal') {
        result = number.toString(16).toUpperCase();
    }

    let output = document.querySelector("[name='output']");

    output.value = result;
}