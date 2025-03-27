document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let generateBtn = document.querySelector("[value='Generate']");

    generateBtn.addEventListener('click', handleGenerateBtn);

    function handleGenerateBtn(event) {
      event.preventDefault();
    }
}