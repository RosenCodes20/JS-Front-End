function solve (arrOfStrings) {

    username = arrOfStrings[0];

    for (let i = 1; i < arrOfStrings.length; i++) {
        if (arrOfStrings[i].split("").reverse().join("") === username) {
            console.log(`User ${username} logged in.`);
        } else {

            if (i === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }

            console.log('Incorrect password. Try again.');
        }
    }

}

solve(['sunny','rainy','cloudy','sunny','not sunny'])