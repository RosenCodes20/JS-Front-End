function solve() {
   let searchText = document.getElementById('searchText').value;

   let unorderedList = document.querySelector('ul');

   let children = unorderedList.children;

   let matches = 0;

   for (let listItem of children) {
      if (listItem.textContent.includes(searchText)) {
         listItem.style.fontWeight = 'bold';
         listItem.style.textDecoration = 'underline';
         matches++
      }
   }

   let result = document.getElementById('result');

   result.textContent = `${matches} matches found`;
}