function phoneBook(arrayOfStrings) {
    let object = {};
    for (let string of arrayOfStrings) {
        let [name, phoneNumber] = string.split(' ');
        for (let i = 0; i < arrayOfStrings.length; i++) {
            object[name] = phoneNumber;
        }
    }

    let entries = Object.entries(object);

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

phoneBook(['Tim 0834212554',

    'Peter 0877547887',
    
    'Bill 0896543112',
    
    'Tim 0876566344']);