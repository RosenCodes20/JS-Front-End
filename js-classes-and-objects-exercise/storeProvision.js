function storeProvision(arrOfProducts, arrTwoOfProducts) {
    let object = {};
    function storeProvisionInObject (object, arrOfProducts) {
        let product;
        let quantity;
        
        for (let i = 0; i < arrOfProducts.length; i+=2) {
            
            product = arrOfProducts[i];
            
            quantity = Number(arrOfProducts[i + 1]);
            
            
            if (!Object.hasOwn(object, product)) {
                object[product] = quantity;
            } else {
                object[product] += quantity;
            }
        }
    }
    
    storeProvisionInObject(object, arrOfProducts);
    storeProvisionInObject(object, arrTwoOfProducts);
    
    let entires = Object.entries(object);

    for (let [key, value] of entires) {
        console.log(`${key} -> ${value}`);
    }
}

storeProvision([
    
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
],

[
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
])