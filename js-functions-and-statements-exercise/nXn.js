function solve(num) {
    let matrix = []

    for (let i = 0; i < num; i++) {
        let helpList = [];

        for (let j = 0; j < num; j++) {
            helpList.push(num);
        }

        matrix.push(helpList)
    }

    for (let row of matrix) {
        console.log(row.join(' '))
    }
}

solve(3)