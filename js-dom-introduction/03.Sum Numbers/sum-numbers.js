function calc() {
    let firstNum = document.getElementById('num1');
    let secondNum = document.getElementById('num2');

    let numOne = firstNum.value;
    let numTwo = secondNum.value;

    let sumInput =  document.getElementById('sum');

    sumInput.value = Number(numOne) + Number(numTwo);
}