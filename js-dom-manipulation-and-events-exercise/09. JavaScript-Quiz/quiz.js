document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let sections = document.querySelectorAll('section');

    let firstSect = sections[0];
    let secondSect = sections[1];
    let thirdSect = sections[2];
    let rightAnswers = 0;
    let answers = firstSect.getElementsByClassName('quiz-answer');
    let results = document.getElementById('results');

    let secondAnswers = secondSect.getElementsByClassName('quiz-answer');

    let thirdAnswers = thirdSect.getElementsByClassName('quiz-answer');

    for (let answer of answers) {
      answer.addEventListener('click', handleFirstBtnClick);
    }

    for (let answer of secondAnswers) {
      answer.addEventListener('click', handleSecondBtnClick);
    }

    for (let answer of thirdAnswers) {
      answer.addEventListener('click', handleThirdBtnClick);
    }

    function handleFirstBtnClick(event) {
      event.preventDefault();

      if (event.target.textContent == 'onclick') {
        rightAnswers++;
      }

      firstSect.classList.add('hidden');
      secondSect.classList.remove('hidden');
    }

    function handleSecondBtnClick(event) {
      event.preventDefault();

      if (event.target.textContent == 'JSON.stringify()') {
        rightAnswers++;
      }

      secondSect.classList.add('hidden');
      thirdSect.classList.remove('hidden');
    }

    function handleThirdBtnClick(event) {
      event.preventDefault();
      if (event.target.textContent == 'A programming API for HTML and XML documents') {
        rightAnswers++;
      }

      thirdSect.classList.add('hidden');

      if (rightAnswers == 3) {
        results.textContent = "You are recognized as top JavaScript fan!";
      } else if (rightAnswers == 1) {
        results.textContent = `You have ${rightAnswers} right answer`;
      } else{
        results.textContent = `You have ${rightAnswers} right answers`;
      }
    }
}