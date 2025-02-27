function listOfNames(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    let helpArray = [];
    for (let i = 0; i < arr.length; i++) {
        helpArray.push(`${i + 1}.${arr[i]}`);
    }

    return helpArray.join('\n')
}

console.log(listOfNames(["Charlie", "Alice", "Bob"]));