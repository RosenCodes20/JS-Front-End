function wordsUppercase(text) {
    const pattern = /\b\w+\b/g;
    let arrayMatch = text.match(pattern);
    
    for (let i = 0; i < arrayMatch.length; i++) {
        arrayMatch[i] = arrayMatch[i].toUpperCase();
    }
    
    console.log(arrayMatch.join(', '));
}

wordsUppercase('Hi, how are you?')
