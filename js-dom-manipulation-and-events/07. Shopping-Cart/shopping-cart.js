document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let buttons = document.getElementsByClassName('add-product');

   let checkout = document.getElementsByClassName('checkout')[0];

   checkout.addEventListener('click', calculateCheckout);
   
   for (let button of buttons) {
      button.addEventListener('click', checkIfButtonClicked);
   }

   let textArea = document.querySelector('textarea');

   let money = {};

   function checkIfButtonClicked(event) {
      let parent = event.target.parentElement.parentElement;

      let product = parent.children[1].children[0];
      let productPrice = parent.children[3];

      if (!(money.hasOwnProperty(product.textContent))) {
         money[product.textContent] = 0;
      }
      money[product.textContent] += Number(productPrice.textContent)

      textArea.value += `Added ${product.textContent} for ${productPrice.textContent} to the cart.\n`;
   }

   function calculateCheckout() {
      console.log(money)
      let keys = Object.keys(money);

      let sum = 0;

      for (let value of Object.values(money)) {
         sum += value;
      }

      for (let button of buttons) {
         button.disabled = true;
      }

      textArea.value += `You bought ${keys.join(', ')} for ${sum.toFixed(2)}.`;

      checkout.removeEventListener('click', calculateCheckout);
   }
}
