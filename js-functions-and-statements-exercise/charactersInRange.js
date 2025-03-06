function charsInRange(stringOne, stringTwo) {
    let asciiNumForStringOne = stringOne.charCodeAt(0);
    let asciiNumForStringTwo = stringTwo.charCodeAt(0);
    
    let result = [];
    
    if (asciiNumForStringOne < asciiNumForStringTwo) {
        for (let i = asciiNumForStringOne + 1; i < asciiNumForStringTwo; i++) {
            result.push(String.fromCharCode(i));
        }
    } else {
        for (let i = asciiNumForStringOne - 1; i > asciiNumForStringTwo; i--) {
            result.push(String.fromCharCode(i));
        }
        result.reverse();
    }
    
    console.log(result.join(' '))
}

charsInRange('C',
'#')