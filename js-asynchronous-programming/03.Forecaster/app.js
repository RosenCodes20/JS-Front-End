function attachEvents() {
    let btn = document.getElementById('submit');

    btn.addEventListener('click', handleClickingSubmitBtn);

    function handleClickingSubmitBtn(e) {
        e.preventDefault();

        let url = 'http://localhost:3030/jsonstore/forecaster/locations';

        fetch(url)
        .then(getRes)
        .then(getData)
        .catch(catchError);

        function getRes(res) {
            return res.json();
        }

        function getData(data) {
            console.log(data)
        }

        function catchError(err) {
            console.error(err);
        }
    }
}

attachEvents();