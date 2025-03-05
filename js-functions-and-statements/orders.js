function orders (product, count) {
    let price = 1;

    let products = {
        coffee: 1.5,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00,
    };

    price = products[product] * count;

    console.log(price.toFixed(2));
}

orders("coffee", 2)