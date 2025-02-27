function revealWords (words, text) {
    wordsArr = words.split(', ');
    splittedText = text.split(' ');
    let currentText = text;
    for (let word of splittedText) {
        for (let w of wordsArr) {
            if (word.length == w.length && word.includes('*')) {
                currentText = currentText.replace(word, w)
            }
        }
    }

    console.log(currentText);
}

revealWords('great, learning',

'softuni is ***** place for ******** new programming languages')