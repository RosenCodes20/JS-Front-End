function theatrePromotions (typeOfDay, age) {
    if (typeOfDay === 'Weekday') {
        if (age >= 0 && age <= 18) {

            let price = 12;
            console.log(`${price}$`);
            
        } else if (age > 18 && age <= 64) {
            let price = 18;
            console.log(`${price}$`);

        } else if (age > 64 && age <= 122) {
            let price = 12;
            console.log(`${price}$`);
        } else {
            console.log("Error!");
        }
        
    } else if (typeOfDay === 'Weekend') {
        if (age >= 0 && age <= 18) {
            
            let price = 15;
            console.log(`${price}$`);
            
        } else if (age > 18 && age <= 64) {
            let price = 20;
            console.log(`${price}$`);
            
        } else if (age > 64 && age <= 122) {
            let price = 15;
            console.log(`${price}$`);
        } else {
            console.log("Error!");
        }
        
    } else if (typeOfDay === 'Holiday') {
        if (age >= 0 && age <= 18) {
            let price = 5;
            console.log(`${price}$`);

        } else if (age > 18 && age <= 64) {
            let price = 12;
            console.log(`${price}$`);

        } else if (age > 64 && age <= 122) {
            let price = 10;
            console.log(`${price}$`);
        } else {
            console.log("Error!");
        }

    } else {
        console.log("Error!");
    }

}

theatrePromotions('Holiday', 126);