function solve(num, arr) {
    let splittedNums = arr.slice(0, num);
    let reversedArr = splittedNums.reverse();

    console.log(reversedArr.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);