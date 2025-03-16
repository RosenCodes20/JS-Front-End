function classStorage() {
    class Storage {
        capacity;
        
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
        }
        
        getTotalCost() {
            let sum = 0;
            for (let storages of this.storage) {
                sum += storages.price * storages.quantity;
            }
            return sum;
        }
        
        addProduct(product) {
            this.storage.push(product);
            this.totalCost = this.getTotalCost();
            this.capacity -= product.quantity;
        }
        
        getProducts() {
            let result = [];
            for (let product of this.storage) {
                result.push(JSON.stringify(product));
            }
            
            return result.join('\n');
        }
    }
    
    let productOne = {name: 'Tomato',
        
        price: 0.90, quantity: 19};
        
        let productTwo = {name: 'Potato',
            
            price: 1.10, quantity: 10};
            
            let storage = new Storage(30);
            
            storage.addProduct(productOne);
            
            storage.addProduct(productTwo);
            console.log(storage.totalCost);
        }
        
        classStorage();