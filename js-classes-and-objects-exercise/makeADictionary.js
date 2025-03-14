function makeDictionary(arrOfJsons) {
    let dictionary = {};
    for (let json of arrOfJsons) {
        let object = JSON.parse(json);

        let key = Object.keys(object)[0];

        let value = object[key];

        dictionary[key] = value;
    }

    let entries = Object.entries(dictionary).sort(
        (a, b) => {
            let key = a[0];
            let value = b[0];

            return key.localeCompare(value);
        }
    );

    for (let [key, value] of entries) {
        console.log(`Term: ${key} => Definition: ${value}`);
    }
}

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);