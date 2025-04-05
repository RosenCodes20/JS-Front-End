function solve() {
    let info = document.querySelector('.info');
    
    let arriveBtn = document.getElementById('arrive');
    let depotBtn = document.getElementById('depart');
    
    let stopId = 'depot'
    let nextStop = ''
    
    let url = `http://localhost:3030/jsonstore/bus/schedule/`;

    function depart() {
        fetch(url + stopId)
        .then(getRes)
        .then(getData)
        .catch(catchError)
        
        function getRes(res) {
            return res.json();
        }
        
        function getData(data) {
            info.textContent = `Next stop ${data.name}`;
            nextStop = data.name;
            stopId = data.next;
            arriveBtn.disabled = false;
            depotBtn.disabled = true;
        }
        
        function catchError(err) {
            console.error(err);
            info.textContent = 'Error';
            arriveBtn.disabled = true;
            depotBtn.disabled = true;
        }
    }
    
    function arrive() {
        info.textContent = `Arriving at ${nextStop}`;
        arriveBtn.disabled = true;
        depotBtn.disabled = false;
    }
    
    return {
        depart,
        arrive
    };
}

let result = solve();