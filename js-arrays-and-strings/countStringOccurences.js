function solve(text, word) {
    splittedText = text.split(' ');
    let count = 0;
    for (let splittedWord of splittedText) {
        if (splittedWord === word) {
            count++;
        }
    }

    console.log(count);
}

solve('A small sentence with some words',

'small')