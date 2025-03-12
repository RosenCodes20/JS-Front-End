function towns(arrOfTowns) {
    let object = {};

    for (let towns of arrOfTowns) {
        let [town, latitude, longitude] = towns.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        object = {
            town,
            latitude,
            longitude
        }
        console.log(object);
    }

}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);