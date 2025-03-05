function solve (grade) {
    let msg;
    if (grade < 3) {
        msg = 'Fail';
    } else if (grade < 3.5) {
        msg = 'Poor';
    } else if (grade < 4.5) {
        msg = 'Good';
    } else if (grade < 5.5) {
        msg = 'Very good';
    } else if (grade >= 5.5) {
        msg = 'Excellent';
    }
    
    if (msg !== 'Fail') {
        console.log(`${msg} (${grade.toFixed(2)})`)
    } else if (msg === 'Fail') {
        console.log(`${msg} (2)`)
    }
}

solve(4.50)