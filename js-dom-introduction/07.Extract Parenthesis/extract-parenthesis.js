function extract(content) {
    let pTag = document.getElementById(content);

    let textInP = pTag.textContent;

    let match = textInP.match(/\(.+?\)/g);

    let newArr = [];

    for (let matches of match) {
        newArr.push(matches.slice(1, matches.length - 1));
    }

    return newArr.join('; ')
}