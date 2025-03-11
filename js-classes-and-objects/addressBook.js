function addressBook(arrOfStrings) {
    let object = {};
    for (let string of arrOfStrings) {
        let [name, address] = string.split(':');
        for (let i = 0; i < arrOfStrings.length; i++) {
            object[name] = address;
        }
    }
    
    let entries = Object.entries(object);

    entries.sort((a, b) => {
        keyA = a[0];
        keyB = b[0];

        return String(a).localeCompare(String(b));
    })

    for (let entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`)
    }
}

addressBook(['Tim:Doe Crossing',
    
    'Bill:Nelson Place',
    
    'Peter:Carlyle Ave',
    
    'Bill:Ornery Rd']);