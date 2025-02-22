function reversedChars(char1, char2, char3) {

    let charsArray = [];

    charsArray.push(char1, char2, char3);

    charsArray.reverse();

    console.log(charsArray.join(' '))
}

reversedChars('a', 'b', 'c')