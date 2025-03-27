document.addEventListener('DOMContentLoaded', solve);

function solve() {
   let inputValue = document.querySelector("[type='text']");

   let button =  document.querySelector("[type='submit']");

   button.addEventListener('click', checkInputValue);

   let content = document.getElementById('content');

   function checkInputValue(event) {
      event.preventDefault();
      let splittedInput = inputValue.value.split(', ');
      
      for (let string of splittedInput) {
         let newSection = document.createElement('div');
         let newP = document.createElement('p');
         newP.style.display = 'none';
         newP.textContent = string;

         newSection.appendChild(newP);

         newSection.addEventListener('click', handleSection);

         function handleSection(event) {
            event.target.querySelector('p').style.display = 'block';
         }

         content.appendChild(newSection);
      }
   }
}