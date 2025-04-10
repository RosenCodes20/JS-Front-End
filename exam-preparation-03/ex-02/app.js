window.addEventListener("load", solve);

function solve() {
	let addBtn = document.getElementById('add-btn');
	let checkList = document.getElementById('check-list');
	let laptopModel = document.getElementById('laptop-model');
	let storage = document.getElementById('storage');
	let price = document.getElementById('price');
	let laptopsList = document.getElementById('laptops-list');
	let clear = document.querySelector('[class$="clear"]');

	addBtn.addEventListener('click', handleClickingAddBtn);
	clear.addEventListener('click', handleClickingClearBtn);
	
	function handleClickingAddBtn() {

		if (!laptopModel.value || !storage.value || !price.value) {
			return;
		}

		let newLi = document.createElement('li');
		newLi.classList.add('laptop-item');
		newLi.innerHTML = `
		<article>
			<p>${laptopModel.value}</p>
			<p>Memory: ${storage.value} TB</p>
			<p>Price: ${price.value}$</p>
		</article>
		<button class="btn edit">edit</button>
		<button class="btn ok">ok</button>
		`;
		
		checkList.appendChild(newLi);
		
		let edit = newLi.querySelector('[class$="edit"]');
		let ok = newLi.querySelector('[class$="ok"]');
		
		edit.addEventListener('click', handleClickingEdit);
		ok.addEventListener('click', handleCLickingOk);
		
		laptopModel.value = '';
		storage.value = '';
		price.value = '';
		addBtn.disabled = true;
		
		function handleClickingEdit() {
			laptopModel.value = newLi.children[0].children[0].textContent;
			storage.value = newLi.children[0].children[1].textContent.split(' ')[1];
			price.value = newLi.children[0].children[2].textContent.split(' ')[1].replace('$', '');
			
			addBtn.disabled = false;
			newLi.remove();
		}
		
		function handleCLickingOk() {
			let currLi = document.createElement('li');
			currLi.classList.add('laptop-item');
			currLi.innerHTML = `
			<article>
				<p>${newLi.children[0].children[0].textContent}</p>
				<p>Memory: ${newLi.children[0].children[1].textContent.split(' ')[1]} TB</p>
				<p>Price: ${newLi.children[0].children[2].textContent.split(' ')[1].replace('$', '')}$</p>
			</article>
			`;

			laptopsList.appendChild(currLi);

			newLi.remove();
			addBtn.disabled = false;
		}
	}

	function handleClickingClearBtn(e) {
		e.target.parentElement.children[1].replaceChildren();
	}
}
