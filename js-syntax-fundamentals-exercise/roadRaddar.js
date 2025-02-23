function roadRaddar(speedOfArea, area) {
    let limit = 0;

    if (area == 'motorway') {
        limit = 130;
    } else if (area == 'interstate') {
        limit = 90;
    } else if (area == 'city') {
        limit = 50;
    } else if (area == 'residential') {
        limit = 20;
    }

    if (speedOfArea <= limit) {
        console.log(`Driving ${speedOfArea} km/h in a ${limit} zone`);
    } else {
        if (speedOfArea - limit <= 20) {
            console.log(`The speed is ${speedOfArea - limit} km/h faster than the allowed speed of ${limit} - speeding`)
        } else if (speedOfArea - limit <= 40) {
            console.log(`The speed is ${speedOfArea - limit} km/h faster than the allowed speed of ${limit} - excessive speeding`)
        } else {
            console.log(`The speed is ${speedOfArea - limit} km/h faster than the allowed speed of ${limit} - reckless driving`)
        }
    }
}

roadRaddar(200, 'motorway')