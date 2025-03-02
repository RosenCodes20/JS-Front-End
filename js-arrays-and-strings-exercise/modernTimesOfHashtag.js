function solve(text) {
    let helpArray = [];

    let regex = /#[a-zA-z]+/g;

    let match = text.match(regex);
    
    for (let i = 0; i < match.length; i++) {
        match[i] = match[i].replace('#', '')
    }

    console.log(match.join('\n'));
}


solve('Nowadays everyone uses # to tag a #special word in #socialMedia')