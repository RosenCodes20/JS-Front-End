function nthElementOfArray (arr, number) {
    let helpArray = [];

    for (let i = 0; i < arr.length; i += number) {
        helpArray.push(arr[i]);
    }

    return helpArray;
}

console.log(nthElementOfArray(['5',

    '20',
    
    '31',
    
    '4',
    
    '20'],
    
    2));