function attachEvents() {
    let btn = document.getElementById('submit');
    let location = document.getElementById('location');
    btn.addEventListener('click', handleClickingSubmitBtn);
    
    let div = document.getElementById('forecast');
    let object;
    
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
        
        async function getData(data) {
            for (let obj of data) {
                
                if (location.value == obj['name']) {
                    object = obj;
                }
            }
            
            let url = 'http://localhost:3030/jsonstore/forecaster/today/' + object['code'];
            
            let res = await fetch(url);
            
            let dataIn = await res.json();
            
            let secondUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + object['code'];
            let secondRes = await fetch(secondUrl);
            let secondData = await secondRes.json();
            
            div.style.display = 'block';
            let symbol = '';
            if (dataIn['forecast']['condition'] == 'Sunny') {
                symbol = '&#x2600;'
            } else if (dataIn['forecast']['condition'] == 'Partly sunny') {
                symbol = '&#x26C5;'
            } else if (dataIn['forecast']['condition'] == 'Overcast') {
                symbol = '&#x2601;'
            } else if (dataIn['forecast']['condition'] == 'Rain') {
                symbol = '&#x2614;'
            } else if (dataIn['forecast']['condition'] == 'Degrees') {
                symbol = '&#176;'
            }
            
            let num = 0;
            let symbol1 = handleSymbols(secondData, '', num);
            num++;
            let symbol2 = handleSymbols(secondData, '', num);
            num++;
            let symbol3 = handleSymbols(secondData, '', num);
            
            let newDiv = document.createElement('div');
            newDiv.classList.add('forecasts');
            
            newDiv.innerHTML = `
                <span class="condition symbol">${symbol}</span>
                <span class="condition">
                    <span class="forecast-data">${dataIn['name']}</span>
                    <span class="forecast-data">${dataIn['forecast']['low']}°/${dataIn['forecast']['high']}°</span>
                    <span class="forecast-data">${dataIn['forecast']['condition']}</span>
                 </span>`;
            
            div.children[0].appendChild(newDiv);

            let forecastInfoDiv = document.createElement('div');
            forecastInfoDiv.classList.add('forecast-info');

            let counter = 0;
            for (let obj of secondData['forecast']) {
                let newSpan = document.createElement('span');
                newSpan.classList.add('upcoming');
                console.log(obj);
                if (counter == 0) {
                    newSpan.innerHTML = `
                        <span class="symbol">${symbol1}</span>
                        <span class="forecast-data">${obj['low']}°/${obj['high']}°</span>
                        <span class="forecast-data">${obj['condition']}</span>
                    `;
                } else if (counter == 1) {
                    newSpan.innerHTML = `
                        <span class="symbol">${symbol2}</span>
                        <span class="forecast-data">${obj['low']}°/${obj['high']}°</span>
                        <span class="forecast-data">${obj['condition']}</span>
                    `;
                } else {
                    newSpan.innerHTML = `
                        <span class="symbol">${symbol3}</span>
                        <span class="forecast-data">${obj['low']}°/${obj['high']}°</span>
                        <span class="forecast-data">${obj['condition']}</span>
                    `;
                }
                forecastInfoDiv.appendChild(newSpan);
                counter++;
            }

            div.children[1].appendChild(forecastInfoDiv);
        }
        
        function catchError(err) {
            console.error(err);

        }
    }
}

function handleSymbols(secondData, symbol, num) {
    if (secondData['forecast'][num]['condition'] == 'Sunny') {
        symbol = '&#x2600;'
    } else if (secondData['forecast'][num]['condition'] == 'Partly sunny') {
        symbol = '&#x26C5;'
    } else if (secondData['forecast'][num]['condition'] == 'Overcast') {
        symbol = '&#x2601;'
    } else if (secondData['forecast'][num]['condition'] == 'Rain') {
        symbol = '&#x2614;'
    } else if (secondData['forecast'][num]['condition'] == 'Degrees') {
        symbol = '&#176;'
    }
    
    
    return symbol;
}

attachEvents();