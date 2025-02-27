function arrayRotation (arr, rotations) {
    for (let i = 0; i < rotations; i++) {

        let firstElemet = arr.shift();
        arr.push(firstElemet);
        
    }

    console.log(arr.join(' '));
}

arrayRotation([32, 21, 61, 1], 4)