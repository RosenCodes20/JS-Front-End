function convertToObject(jsonString) {
    const object = JSON.parse(jsonString);

    let entries = Object.entries(object);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');