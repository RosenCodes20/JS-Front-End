function city(cityObj) {
    for (let key of Object.keys(cityObj)) {
        console.log(`${key} -> ${cityObj[key]}`);
    }
}

city({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    });