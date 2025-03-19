function solve() {
  let text = document.getElementById('text').value;
  
  let inputCase = document.getElementById('naming-convention');
  
  let result = document.getElementById('result');
  
  if (inputCase.value == 'Camel Case') {
    text = text.toLowerCase().split(' ');
    let helpArr = [text[0]];
    
    for (let word of text.slice(1)) {
      helpArr.push(word[0].toUpperCase() + word.slice(1));
    }
    
    result.textContent = helpArr.join('');
    
  } else if (inputCase.value == 'Pascal Case') {
    text = text.toLowerCase().split(' ');
    let helpArr = [];
    
    for (let word of text) {
      helpArr.push(word[0].toUpperCase() + word.slice(1));
    }
    
    result.textContent = helpArr.join('');
  } else {
    result.textContent = 'Error!';
  }
}