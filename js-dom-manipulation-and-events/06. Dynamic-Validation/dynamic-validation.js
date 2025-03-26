document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let input = document.getElementById('email');

    input.addEventListener('change', checkInput);

    function checkInput(event) {
        let target = event.target;

        let pattern = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g

        if (!(target.value.match(pattern))) {
            target.classList.add('error');
        } else {
            target.classList.remove('error');
        }
    }
}
