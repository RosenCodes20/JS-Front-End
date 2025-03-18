function colorize() {
    let tableRows = document.querySelectorAll('tr:nth-child(even)');

    for (let row of tableRows) {
        row.style.backgroundColor = 'teal';
    }
}