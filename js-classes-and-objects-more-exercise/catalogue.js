function catalogue(arrOfStrings) {
    let object = {};
    for (let string of arrOfStrings) {
        let [name, price] = string.split(' : ');
        let firstLetter = name[0];

        if (!object[firstLetter]) {
            object[name[0]] = [];
        }

        for (let key of Object.keys(object)) {
            if (key == name[0]) {
                object[key].push({name, price});
            }
        }
    }

    let entries = Object.entries(object);
    entries.sort((a, b) => {
        let letterA = a[0];
        let letterB = b[0];

        return letterA.localeCompare(letterB);
    })

    for (let [key, value] of entries) {
        console.log(key);

        value.sort((a, b) => {
            let nameA = a.name;
            let nameB = b.name;

            return nameA.localeCompare(nameB);
        });
        
        for (let object of value) {
            console.log(`  ${object.name}: ${object.price}`);
        }
    }
}

catalogue([

    'Appricot : 20.4',
    
    'Fridge : 1500',
    
    'TV : 1499',
    
    'Deodorant : 10',
    
    'Boiler : 300',
    
    'Apple : 1.25',
    
    'Anti-Bug Spray : 15',
    
    'T-Shirt : 10'
    
    ]);