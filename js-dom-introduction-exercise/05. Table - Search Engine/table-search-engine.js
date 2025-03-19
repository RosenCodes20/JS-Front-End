function solve() {
   let tableRows = document.querySelectorAll('tbody tr');
   
   let searchField = document.getElementById('searchField').value;
   
   for (let row of tableRows) {
      if (row.className == 'select') {
         row.className = '';
      }
      
      let children = row.children;
      
      for (let child of children) {
         if (child.textContent.includes(searchField)) {
            row.className = 'select';
            break;
         }
      }
   }
   
   document.getElementById('searchField').value = '';
}