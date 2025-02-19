function mathOperations (numOne, numTwo, operator) {
    if (operator === '+') {
        return numOne + numTwo;

    } else if (operator === '-') {
        return numOne - numTwo;

    } else if (operator === '/') {
        if (numOne === 0 || numTwo === 0) {
            throw "Cannot divide by zero!";
        } else {
            return numOne / numTwo;
        }

    } else if (operator === '*') {
        return numOne * numTwo;

    } else if (operator === '**') {
        return numOne ** numTwo;

    } else if (operator === "%") {
        return numOne % numTwo;
    }
}

console.log(mathOperations(5, 1, '/'));