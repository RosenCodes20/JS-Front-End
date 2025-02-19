function largestNumber (numOne, numTwo, numThree) {
    let arr = []

    arr.push(numOne, numTwo, numThree)
    const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    console.log(`The largest number is ${max}.`)
}

// function largestNumber (numOne, numTwo, numThree) {
//     console.log(`The largest number is ${Math.max(numOne, numTwo, numThree)}.`)
// }

largestNumber(2, 3, 4)