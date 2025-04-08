function solve() {
    let loadOrders = document.getElementById('load-orders');
    let list = document.getElementById('list');
    let order = document.getElementById('order-btn');
    let editOrder = document.getElementById('edit-order');
    let name = document.getElementById('name');
    let quantity = document.getElementById('quantity');
    let date = document.getElementById('date');
    let url = 'http://localhost:3030/jsonstore/orders';
    
    loadOrders.addEventListener('click', handleClickingLoadOrders);
    order.addEventListener('click', handleClickingOrderBtn);
    
    async function handleClickingLoadOrders() {
        list.replaceChildren();
        let res = await fetch(url);
        
        let data = await res.json();
        
        let values = Object.values(data);
        
        for (let value of values) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('container');
            
            newDiv.innerHTML += `
                <h2>${value.name}</h2>
                <h3>${value.date}</h3>
                <h3>${value.quantity}</h3>
                <button class="change-btn">Change</button>
                <button class="done-btn">Done</button>
            `
            
            list.appendChild(newDiv);
            
            let doneBtn = newDiv.querySelector('[class="done-btn"]');
            doneBtn.addEventListener('click', handleClickingDoneBtn);
            
            let changeBtn = newDiv.querySelector('[class="change-btn"]');
            changeBtn.addEventListener('click', handleClickingChange);
            
            function handleClickingChange(e) {
                let nameValue = e.target.parentElement.children[0].textContent;
                let dateValue = e.target.parentElement.children[1].textContent;
                let quantityValue = e.target.parentElement.children[2].textContent;
                
                e.target.parentElement.remove();
                
                name.value = nameValue;
                date.value = dateValue;
                quantity.value = quantityValue;
                
                order.disabled = true;
                editOrder.disabled = false;
                
                editOrder.addEventListener('click', handleClickingEditOrder);
                
                async function handleClickingEditOrder(e) {
                    e.preventDefault();
                    let object = {
                        'name': name.value,
                        'quantity': quantity.value,
                        'date': date.value
                    };
                    
                    let options = {
                        'method': 'put',
                        'headers': {
                            'Content-type': 'application/json'
                        },
                        'body': JSON.stringify(object)
                    };

                    let res = await fetch(url + '/' + value._id, options);
                    handleClickingLoadOrders();
                    order.disabled = false;
                    editOrder.disabled = true;
                    
                    name.value = '';
                    quantity.value = '';
                    date.value = '';
                }
            }
            
            async function handleClickingDoneBtn(e) {
                let options = {
                    'method': 'delete'
                }
                console.log(value._id)
                let res = await fetch(url + '/' + value._id, options);
                e.target.parentElement.remove();
            }
        }
    }
    
    async function handleClickingOrderBtn(e) {
        e.preventDefault();
        let object = {
            'name': name.value,
            'quantity': quantity.value,
            'date': date.value
        }
        
        let options = {
            'method': 'post',
            'headers': {
                'Content-type': 'application/json'
            },
            'body': JSON.stringify(object)
        }
        
        let res = await fetch(url, options);
        
        handleClickingLoadOrders();
        
        name.value = '';
        quantity.value = '';
        date.value = '';
    }
}

solve();