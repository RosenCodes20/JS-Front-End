function printAndSum(start, end) {
    let sum = 0;
    let numsArray = [];
    for (let i = start; i <= end; i++) {
        sum += i;
        numsArray.push(i);
    }
    console.log(numsArray.join(' '))
    console.log(`Sum: ${sum}`);
}

printAndSum(0, 26)