function piccolo(arrOfParkingLots) {
    let arrOfParkingNums = new Set();
    for (let lot of arrOfParkingLots) {
        let object = {};
        splittedLot = lot.split(', ');

        object[splittedLot[0]] = splittedLot[1];

        let entries = Object.entries(object);

        for (let [key, value] of entries) {
            if (key == 'IN') {
                arrOfParkingNums.add(value);
            } else {
                arrOfParkingNums.delete(value);
            }
        }
    }
    arrOfParkingNums = Array.from(arrOfParkingNums);
    if (arrOfParkingNums.length > 0) {
        console.log(arrOfParkingNums.sort((a, b) => a.localeCompare(b)).join('\n'));
    } else {
        console.log('Parking Lot is Empty')
    }
    
}


piccolo(['IN, CA2844AA',

    'IN, CA1234TA',
    
    'OUT, CA2844AA',
    
    'IN, CA9999TT',
    
    'IN, CA2866HI',
    
    'OUT, CA1234TA',
    
    'IN, CA2844AA','OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);