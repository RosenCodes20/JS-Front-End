// Solution 1
// let power = (num, power) => Math.pow(num, power)

// Solution 2
// function mathPower(num, power) {
//     console.log(Math.pow(num, power))
// }

// Solution 3

function mathPower (num, power) {
    let result = 1;

    for (let i = 0; i < power; i++) {
        result *= num;
    }

    console.log(result);
}


// console.log(power(2, 8))
mathPower(2, 8)