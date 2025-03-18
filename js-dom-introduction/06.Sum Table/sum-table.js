function sumTable() {
    let tableRows = document.querySelectorAll('tbody tr:not(:last-child)');

    let sum = 0;

    for (let row of tableRows) {
        let prices = row.children[row.children.length - 1];
        sum += Number(prices.textContent);
    }

    let lastTableRow = document.getElementById('sum');

    lastTableRow.textContent = sum;
}
