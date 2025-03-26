document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        input.addEventListener('focus', catchInput);
        input.addEventListener('blur', catchInputOut)
    }

    function catchInput(event) {
        let parent = event.target.parentElement;

        parent.classList.add('focused');
    }

    function catchInputOut(event) {
        event.target.parentElement.classList.remove('focused');
    }
}