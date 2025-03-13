function oddOccurrunces(sentence) {
    let words = sentence.split(' ');

    object = {};

    for (let word of words) {
        word = word.toLowerCase();
        if (!Object.hasOwn(object, word)) {
            object[word] = 1;
        } else {
            object[word] += 1;
        }
    }

    let entries = Object.entries(object).sort(
        (a, b) => {
            let key = a[1];
            let value = b[1];

            return value - key;
        }
    );
    let result = [];

    for (let [key, value] of entries) {
        if (value % 2 != 0) {
            result.push(key);
        }
    }

    console.log(result.join(' '));
}

oddOccurrunces('Cake IS SWEET is Soft CAKE sweet Food');