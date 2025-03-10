function numberModification(num) {
    let numAsString = String(num);
    let sumOfChars = 0;

    while (true) {
        sumOfChars = 0;
        for (let char of numAsString) {
            sumOfChars += Number(char);
        }

        if (sumOfChars / numAsString.length > 5) {
            console.log(numAsString);
            break;
        }

        let splittedNum = numAsString.split('');
        splittedNum.push(9);
        numAsString = splittedNum.join('');
    }
}

numberModification(5835)
