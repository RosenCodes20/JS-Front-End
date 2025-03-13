function wordsTracker(arrOfWords) {
    let wordsToFind = arrOfWords[0];
    let splittedWords = wordsToFind.split(' ');

    let object = {};

    for (let word of splittedWords) {
        object[word] = 0;
    }

    for (let word of arrOfWords.slice(1)) {
        for (let wordToFind of splittedWords) {
            if (word == wordToFind) {
                object[wordToFind] += 1;
            }
        }
    }

    let entries = Object.entries(object).sort(
        (a, b) => {
            let key = a[1];
            let value = b[1];

            return value - key;
        }
    );

    for (let [key, value] of entries) {
        console.log(`${key} - ${value}`);
    }
}

wordsTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence']);