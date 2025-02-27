function solve(word, text) {
    splittedWords = text.split(' ');

    for (let words of splittedWords) {
        if (word.toLowerCase() === words.toLowerCase()) {
            return word;
        }
    }

    return `${word} not found!`
}

console.log(solve('python',

'JavaScript is the best programming language'))