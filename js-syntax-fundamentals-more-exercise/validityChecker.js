function validityChecker(x1, y1, x2, y2) {
    x = (Math.sqrt((x1 ** 2) + (y1 ** 2)))

    if (typeof x === 'number' && isFinite(x) && Math.floor(x) == x) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    y = Math.sqrt((x2 ** 2) + (y2 ** 2));

    if (typeof y === 'number' && isFinite(y) && Math.floor(y) == y) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    z = (Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2)));

    if (typeof z === 'number' && isFinite(z) && Math.floor(z) == z) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

validityChecker(2, 1, 1, 1)