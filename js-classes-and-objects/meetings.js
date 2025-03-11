function meetings(arrOfStrings) {
    let object = {};
    let names = [];
    for (let string of arrOfStrings) {
        let [name, phoneNumber] = string.split(' ');
        
        if (names) {
            let conflict = false;
            for (let name_ of names) {
                if (name === name_) {
                    console.log(`Conflict on ${name}!`);
                    conflict = true;
                    break;
                }
            }
            if (!conflict) {
                console.log(`Scheduled for ${name}`);
                object[name] = phoneNumber;
                names.push(name);
            }
        }
    }
    
    let entries = Object.entries(object);
    
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

meetings(['Friday Bob',
    
    'Saturday Ted',
    
    'Monday Bill',
    
    'Monday John',
    
    'Wednesday George'])