function inventory(arrOfStrings) {
    let object = {};
    
    for (let string of arrOfStrings) {
        let [heroName, heroLevel, ...items] = string.split(' / ');
        
        object[heroName] = {
            'heroLevel': Number(heroLevel),
            'items': items
        };
    }
    
    let entries = Object.entries(object);
    
    entries.sort((a, b) => {
        let key = a[1].heroLevel;
        let value = b[1].heroLevel;
        
        return key - value;
    })
    
    for (let [key, value] of entries) {
        console.log(`Hero: ${key}`);
        
        let entriesTwo = Object.entries(value);
        
        for (let [keyTwo, valueTwo] of entriesTwo) {
            if (keyTwo == 'heroLevel') {
                console.log(`level => ${valueTwo}`);
            } else if (keyTwo == 'items' && valueTwo.length > 0 ) {
                console.log(`items => ${valueTwo.join(', ')}`);
            }
        }    
    }
}

inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);