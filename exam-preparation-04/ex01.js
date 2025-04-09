function solve(arr) {
    let nToIterate = arr[0];
    arr = arr.slice(1);

    let object = {};
    for (let i = 0; i < nToIterate; i++) {
        let [superheroName, superpower, energy] = arr.shift().split('-');

        object[superheroName] = {'superpower': superpower.split(','), 'energy': Number(energy)};
    }

    let j = 0;

    while (arr[j] != 'Evil Defeated!') {

        if (arr[j].split(' * ')[0] == 'Use Power') {
            let [command, superheroName, superpower, energyRequired] = arr[j].split(' * ');

            if (object[superheroName]['superpower'].includes(superpower) && object[superheroName]['energy'] >= energyRequired) {
                object[superheroName]['energy'] -= energyRequired;
                console.log(`${superheroName} has used ${superpower} and now has ${object[superheroName]['energy']} energy!`);
            } else {
                console.log(`${superheroName} is unable to use ${superpower} or lacks energy!`);
            }

        } else if (arr[j].split(' * ')[0] == 'Train') {
            let [command, superheroName, trainingEnergy] = arr[j].split(' * ');

            if (object[superheroName]['energy'] >= 100) {
                console.log(`${superheroName} is already at full energy!`);
            } else {
                if (Number(object[superheroName]['energy']) + Number(trainingEnergy) >= 100) {
                    let gainedEnergy = 100 - object[superheroName]['energy'];
                    object[superheroName]['energy'] = 100;
                    console.log(`${superheroName} has trained and gained ${gainedEnergy} energy!`);
                } else {
                    object[superheroName]['energy'] += Number(trainingEnergy);
                    console.log(`${superheroName} has trained and gained ${trainingEnergy} energy!`);
                }
            }

        } else if (arr[j].split(' * ')[0] == 'Learn') {
            let [command, superheroName, newSuperPower] = arr[j].split(' * ');

            if (object[superheroName]['superpower'].includes(newSuperPower)) {
                console.log(`${superheroName} already knows ${newSuperPower}.`);
            } else {
                object[superheroName]['superpower'].push(newSuperPower);
                console.log(`${superheroName} has learned ${newSuperPower}!`);
            }
        }

        j++;
    }

    let entries = Object.entries(object);

    for (let [key, value] of entries) {
        console.log(`Superhero: ${key}`);
        console.log(`- Superpowers: ${value['superpower'].join(', ')}`);
        console.log(`- Energy: ${value['energy']}`);
    }
}

solve( ([ 

        "3", 
    
        "Iron Man-Repulsor Beams,Flight-80", 
    
        "Thor-Lightning Strike,Hammer Throw-10", 
    
        "Hulk-Super Strength-60", 
    
        "Use Power * Iron Man * Flight * 30", 
    
        "Train * Thor * 20", 
    
        "Train * Hulk * 70", 
    
        "Learn * Hulk * Thunderclap", 
    
        "Use Power * Hulk * Thunderclap * 70", 
    
        "Evil Defeated!" 
    
    ])   );