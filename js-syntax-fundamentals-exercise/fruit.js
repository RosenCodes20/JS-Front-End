function fruit (typeOfFruit, weightInGrams, pricePerKilo) {
    console.log(`I need $${(weightInGrams * pricePerKilo / 1000).toFixed(2)} to buy ${(weightInGrams / 1000).toFixed(2)} kilograms ${typeOfFruit}.`);
}

fruit ('apple', 1563, 2.35)