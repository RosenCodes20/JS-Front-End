function oddAndEvenSum (num) {
    let numAsString = String(num);
    let splittedNum = numAsString.split('');

    let oddSum = 0;
    let evenSum = 0;
    
    for (let i = 0; i < splittedNum.length; i++) {
        if (Number(splittedNum[i]) % 2 == 0) {
            evenSum += Number(splittedNum[i]);
        } else {
            oddSum += Number(splittedNum[i]);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435)