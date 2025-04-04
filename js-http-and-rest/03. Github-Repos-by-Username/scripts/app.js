function loadRepos() {
	let input = document.getElementById('username');

	let url = `https://api.github.com/users/${input.value}/repos`;

	let repos = document.getElementById('repos');

	repos.replaceChildren();

	fetch(url)
	.then(getResponse)
	.then(getData)
	.catch(catchError);

	function getResponse(res) {
		return res.json();
	}

	function getData(data) {
		for (let obj of data) {
			let newLi = document.createElement('li');
			let newA = document.createElement('a');

			newA.href = obj.html_url;
			let newP = document.createElement('p');

			newP.textContent = `${obj.full_name}`;

			newA.appendChild(newP);

			newLi.appendChild(newA);

			repos.appendChild(newLi);
		}
	}

	function catchError(err) {
		console.error(err);
	}
}