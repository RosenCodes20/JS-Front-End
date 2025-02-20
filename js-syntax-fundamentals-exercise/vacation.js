function vacation (groupOfPeople, typeOfGroup, dayOfWeek) {
    let price = 0
    if (typeOfGroup == 'Students') {
        
        if (dayOfWeek == 'Friday') {
            price = 8.45;

        } else if (dayOfWeek == 'Saturday') {
            price = 9.80;
        } else if (dayOfWeek == 'Sunday') {
            price = 10.46;
        }

    } else if (typeOfGroup == 'Business') {

        if (dayOfWeek == 'Friday') {
            price = 10.90;

        } else if (dayOfWeek == 'Saturday') {
            price = 15.60;
        } else if (dayOfWeek == 'Sunday') {
            price = 16;
        }

    } else if (typeOfGroup == 'Regular') {

        if (dayOfWeek == 'Friday') {
            price = 15;

        } else if (dayOfWeek == 'Saturday') {
            price = 20;
        } else if (dayOfWeek == 'Sunday') {
            price = 22.50;
        }
    }

    price = groupOfPeople * price;

    if (typeOfGroup == 'Students' && groupOfPeople >= 30) {
        price *= 0.85;
    } else if (typeOfGroup == 'Business' && groupOfPeople >= 100) {
        price = (groupOfPeople - 10) * (price / groupOfPeople);
    } else if (typeOfGroup == 'Regular' && (groupOfPeople >= 10 && groupOfPeople <= 20)) {
        price *= 0.95;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(100,

"Business",

"Friday");