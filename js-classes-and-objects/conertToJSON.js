function convertToJson(name, lastName, hairColor) {
    const object = {
        name,
        lastName,
        hairColor
    };

    let convertedObjectToJson = JSON.stringify(object);

    console.log(convertedObjectToJson);
}

convertToJson('George', 'Jones',

'Brown');