function extractText() {
    let unorderedList = document.querySelector('ul');

    let listItems = unorderedList.children;

    let textArea = document.querySelector('textarea');

    for (let li of listItems) {
        textArea.value += `\n${li.textContent}`;
    }
}