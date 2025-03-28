document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let generateBtn = document.querySelector("[value='Generate']");
    let objectInput = document.querySelector('#input > textarea');
    let buyBtn = document.querySelector("[value='Buy']");

    generateBtn.addEventListener('click', handleGenerateBtn);
    buyBtn.addEventListener('click', handleBuyButton);

    function handleGenerateBtn(event) {
      event.preventDefault();
      let table = document.querySelector('table tbody');
      let parsedObj = JSON.parse(objectInput.value);

      for (let obj of parsedObj) {
        let newRow = document.createElement('tr');

        let newImgData = document.createElement('td');
        let newImg = document.createElement('img');
        newImg.src = obj.img;
        newImgData.appendChild(newImg);
        newRow.appendChild(newImgData);

        let newName = document.createElement('p');
        let newNameData = document.createElement('td');
        newName.textContent = obj['name'];

        newNameData.appendChild(newName);
        newRow.appendChild(newNameData);

        let newPrice = document.createElement('p');
        let newPriceData = document.createElement('td');
        newPrice.textContent = obj['price'];

        newPriceData.appendChild(newPrice);
        newRow.appendChild(newPriceData);

        let newDecFactor = document.createElement('p');
        let newDecFactorData = document.createElement('td');

        newDecFactor.textContent = obj.decFactor;

        newDecFactorData.appendChild(newDecFactor);

        newRow.appendChild(newDecFactorData);

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        let checkData = document.createElement('td');

        checkData.appendChild(checkbox);

        newRow.appendChild(checkData)
        table.appendChild(newRow);
      }
      
      objectInput.value = '';
    }

    function handleBuyButton(event) {
      event.preventDefault();
      let checkboxes = document.querySelectorAll('td > input');
      let textarea = document.querySelector('#shop > textarea');
      let boughtFurniture = [];
      let prices = [];
      let decFactorArr = [];

      for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            boughtFurniture.push(checkbox.parentElement.parentElement.children[1].children[0].textContent);
            prices.push(Number(checkbox.parentElement.parentElement.children[2].children[0].textContent))
            decFactorArr.push(Number(checkbox.parentElement.parentElement.children[3].children[0].textContent))
          }
      }
      textarea.value += `Bought furniture: ${boughtFurniture.join(', ')}`;

      let sum = 0;

      for (let price of prices) {
        sum += price;
      }

      textarea.value += `\nTotal price: ${sum}`;

      let decFactorSum = 0;

      for (let factor of decFactorArr) {
        decFactorSum += factor;
      }

      textarea.value += `\nAverage decoration factor: ${decFactorSum / decFactorArr.length}`
    }
}