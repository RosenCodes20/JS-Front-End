function solve() {
  let textInTextArea = document.getElementById('input').value;
  
  let splittedText = Array.from(textInTextArea.split('.'));
  
  let output = document.getElementById('output');

  let helpArr = [];
  
  let word = '';
  
  let counter = 0;
  
  while (splittedText.length > 0) {
    let textToAdd = splittedText.shift().trim();
    
    word += textToAdd;
    counter++;
    
    if (counter % 3 == 0 || splittedText.length === 0 && word.length > 0) {
      helpArr.push(word.trim());
      word = '';
    } else {
      word += '.';
    }
  }

  for (let words of helpArr) {
    output.innerHTML += `<p>${words}</p>`
  }
}