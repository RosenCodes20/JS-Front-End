function employees(arrOfNames) {
    let object =  {};

    for (let name of arrOfNames) {
        object[name] = name.length;
    }

    let entries = Object.entries(object);

    for (let [key, value] of entries) {
        console.log(`Name: ${key} -- Personal Number: ${value}`)
    }
}

employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]);