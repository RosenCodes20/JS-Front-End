function sameNumbers (num) {
    let numAsString = String(num);
    let sum = 0;
    let numsArray = [];

    for (let char of numAsString) {
        sum += Number(char);
    }

    let areTheSame = true;
    for (let i = 0; i < numAsString.length; i++) {
        numsArray.push(numAsString[i]);

        if (numAsString[i] !== numsArray[0]) {
            areTheSame = false;
        }
    }

    console.log(areTheSame);
    console.log(sum);
}

sameNumbers(2222222);