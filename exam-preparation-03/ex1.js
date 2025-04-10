function solve(arr) {
    let nToIterate = arr[0];
    arr = arr.slice(1);
    
    let object = {};
    
    for (let i = 0; i < nToIterate; i++) {
        let [chemicalName, quantity] = arr.shift().split(' # ');
        
        object[chemicalName] = {'quantity': Number(quantity)};
    }
    
    let j = 0;
    
    while (arr[j] != 'End') {
        
        if (arr[j].split(' # ')[0] == 'Mix') {
            let [cmd, chemicalNameOne, chemicalNameTwo, amount] = arr[j].split(' # ');
            amount = Number(amount);
            if (object[chemicalNameOne]['quantity'] < amount || object[chemicalNameTwo]['quantity'] < amount) {
                console.log(`Insufficient quantity of ${chemicalNameOne}/${chemicalNameTwo} to mix.`);
            } else {
                object[chemicalNameOne]['quantity'] -= Number(amount);
                object[chemicalNameTwo]['quantity'] -= Number(amount);
                console.log(`${chemicalNameOne} and ${chemicalNameTwo} have been mixed. ${amount} units of each were used.`)
            }
            
        } else if (arr[j].split(' # ')[0] == 'Replenish' ) {
            let [command, chemicalName, amount] = arr[j].split(' # ');
            
            if (!(chemicalName in object)) {
                console.log(`The Chemical ${chemicalName} is not available in the lab.`)
            } else {
                if (object[chemicalName]['quantity'] + Number(amount) >= 500) {
                    let addedAmount = 500 - object[chemicalName]['quantity'];
                    object[chemicalName]['quantity'] = 500;
                    console.log(`${chemicalName} quantity increased by ${addedAmount} units, reaching maximum capacity of 500 units!`);
                } else {
                    object[chemicalName]['quantity'] += Number(amount);
                    console.log(`${chemicalName} quantity increased by ${amount} units!`);
                }
            }
            
        } else if (arr[j].split(' # ')[0] == 'Add Formula') {
            let [command, chemicalName, formula] = arr[j].split(' # ');
            
            if (chemicalName in object) {
                object[chemicalName]['formula'] = formula;
                console.log(`${chemicalName} has been assigned the formula ${formula}.`)
            } else {
                console.log(`The Chemical ${chemicalName} is not available in the lab.`)
            }
        }
        
        j++;
    }
    
    let entries = Object.entries(object);
    
    for (let [key, value] of entries) {
        if (value['formula']) {
            console.log(`Chemical: ${key}, Quantity: ${value['quantity']}, Formula: ${value['formula']}`);
        } else {
            console.log(`Chemical: ${key}, Quantity: ${value['quantity']}`)
        }
    }
}

solve([ '3', 
    
    'Sodium # 300', 
    
    'Chlorine # 100', 
    
    'Hydrogen # 200', 
    
    'Mix # Sodium # Chlorine # 200', 
    
    'Replenish # Sodium # 200', 
    
    'Replenish # Sulfuric Acid # 200', 
    
    'Add Formula # Sodium # Na', 
    
    'Mix # Hydrogen # Chlorine # 50', 
    
    'End'] )