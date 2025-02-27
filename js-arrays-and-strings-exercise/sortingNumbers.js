function sortingNumbers (arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (left === right) {
            result.push(arr[left]);
        } else {
            result.push(arr[left]);
            result.push(arr[right]);
        }
        
        left++;
        right--;
    }

    return result
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));