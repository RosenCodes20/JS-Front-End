function getInfo() {
    let stopId = document.getElementById('stopId');
    
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`;
    
    let stopName = document.getElementById('stopName');
    let buses = document.getElementById('buses');
    
    fetch(url)
    .then(getRes)
    .then(getData)
    .catch(catchError)
    
    function getRes(res) {
        return res.json();
    }
    
    function getData(data) {
        stopName.textContent = data.name;
        
        let entries = Object.entries(data.buses);
        
        for (let [key, value] of entries) {
            let newLi = document.createElement('li');
            newLi.textContent = `Bus ${key} arrives in ${value} minutes`;
            buses.appendChild(newLi);
        }

    }
    
    function catchError(err) {
        stopName.textContent = 'Error';
        buses.innerHTML = '';
        console.error(err.message);
    }

    stopId.value = '';
}