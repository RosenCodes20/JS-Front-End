function repeatString(str, times) {
    let result = '';

    function repeat(str, times, result) {
        for (let i = 0; i < times; i++) {
            result += str;
        }
        return result;
    }

    result = repeat(str, times, result);
    return result;
    
}

console.log(repeatString('abc', 3));