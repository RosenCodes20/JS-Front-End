function solve (arrOfNumbers) {
    const bitcoin = 11949.16;
    const gold = 67.51;
    let budget = 0;
    let daysOfBitcoin = []
    let countOfBitcoins = 0;
    
    for (i = 1; i < arrOfNumbers.length + 1; i++) {
        if (i % 3 === 0) {
            arrOfNumbers[i - 1] *= 0.7;
        }
        
        budget += arrOfNumbers[i - 1] * gold;

        if (budget >= bitcoin) {
            daysOfBitcoin.push(i)
        }

        while (budget >= bitcoin) {
            budget -= bitcoin;
            countOfBitcoins++;
        }
        
    }
    firstDayBoughtBitcoint = daysOfBitcoin[0];
    
    console.log(`Bought bitcoins: ${countOfBitcoins}`);
    
    if (firstDayBoughtBitcoint > 0 ) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBoughtBitcoint}`);
    }
    
    console.log(`Left money: ${budget.toFixed(2)} lv.`);
    
}

solve([3124.15, 504.212, 2511.124]);