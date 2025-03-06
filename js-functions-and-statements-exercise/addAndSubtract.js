function addAndSubtract(numOne, numTwo, numThree) {
    function sum(numOne, numTwo) {
        return numOne + numTwo;
    }

    let subtraction = sum(numOne, numTwo) - numThree;

    console.log(subtraction);
}

addAndSubtract(23, 6, 10)