function palindromeIntegers (arrOfPals) {
    for (let num of arrOfPals) {
        if (String(num) === String(num).split("").reverse().join("")) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([123,323,421,121]);