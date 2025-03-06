function factorialDivision(numForFactorial, secondNumForFactorial) {
    function factorial(numForFact) {
        if (numForFact == 1) {
            return 1;
        }

        return numForFact * factorial(numForFact - 1);
    }

    let factFirstNum = factorial(numForFactorial);
    let factSecondNum = factorial(secondNumForFactorial)


    console.log((factFirstNum / factSecondNum).toFixed(2));
}

factorialDivision(6, 2);