function inventory(arrOfStrings) {
    let objects = [];
    
    for (let string of arrOfStrings) {
        let [heroName, heroLevel, ...items] = string.split(' / ');
        
        objects.push({
            heroName,
            'heroLevel': Number(heroLevel),
            'items': items
        });
    }

    objects.sort((a, b) => a.heroLevel - b.heroLevel)

    for (let object of objects) {
        console.log(`Hero: ${object.heroName}`);
        console.log(`level => ${object.heroLevel}`);
        console.log(`items => ${object.items.join(', ')}`);
    }
}

inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);