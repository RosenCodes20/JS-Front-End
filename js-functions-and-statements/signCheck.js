function signCheck(numOne, numTwo, numThree) {
    let regex = /-/g;
    let numsAsStrings = [];
    numsAsStrings.push(numOne, numTwo, numThree);
    let matchesFount = [];
    for (let n of numsAsStrings) {
        match = String(n).match(regex);

        if (match) {
            matchesFount.push(match[0]);
        }
    }

    if (matchesFount.length % 2 == 0 || !matchesFount) {
        console.log('Positive');
    } else if (matchesFount || matchesFount.length % 2 != 0) {
        console.log('Negative');
    }  
}

signCheck(-11, -12, -13)