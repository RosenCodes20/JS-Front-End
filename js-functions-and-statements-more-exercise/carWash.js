function carWash(commandsArray) {
    let percent = 0;

    percent += 10;

    for (let command of commandsArray.slice(1)) {
        if (command === 'soap') {
            percent += 10;
        } else if (command === 'water') {
            percent *= 1.2;
        } else if (command === 'vacuum cleaner') {
            percent *= 1.25
        } else if (command === 'mud') {
            percent *= 0.9
        }
    }

    console.log(`The car is ${percent.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud",

    "vacuum cleaner"])