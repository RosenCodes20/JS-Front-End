function loadRepos() {
   let url = 'https://api.github.com/users/testnakov/repos';

   fetch(url)
   .then(getResponse)
   .then(getData)
   .catch(catchError);

   let result = document.getElementById('res');

   function getResponse(response) {
      return response.text();
   }

   function getData(data) {
      result.textContent = data;

   }

   function catchError(err) {
      console.error(err);
   }
}