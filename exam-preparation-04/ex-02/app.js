window.addEventListener("load", solve);

function solve() {
	let addBtn = document.getElementById('add-btn');
	let name = document.getElementById('name');
	let time = document.getElementById('time');
	let description = document.getElementById('description');
	let previewList = document.getElementById('preview-list');
	let archiveList = document.getElementById('archive-list');
	
	addBtn.addEventListener('click', handleClickingAddBtn);
	
	function handleClickingAddBtn(e) {
		e.preventDefault();

		if (!name.value || !time.value || !description.value) {
			return;
		}
		
		let newLi = document.createElement('li');
		
		newLi.innerHTML = `
		<article>
			<p>${name.value}</p>
			<p>${time.value}</p>
			<p>${description.value}</p>
		</article>
		
		<div class="buttons">
			<button class="edit-btn">Edit</button>
			<button class="next-btn">Next</button>
		</div>
		`;
		
		addBtn.disabled = true;
		
		let editBtn = newLi.querySelector('[class="edit-btn"]');
		let nextBtn = newLi.querySelector('[class="next-btn"]');
		
		previewList.appendChild(newLi);
		
		name.value = '';
		time.value = '';
		description.value = '';
		
		editBtn.addEventListener('click', handleClickingEdit);
		nextBtn.addEventListener('click', handleClickingNext);
		
		function handleClickingEdit(e) {
			let nameValue = e.target.parentElement.parentElement.children[0].children[0].textContent;
			let timeValue = e.target.parentElement.parentElement.children[0].children[1].textContent;
			let descriptionValue = e.target.parentElement.parentElement.children[0].children[2].textContent;
			
			name.value = nameValue;
			time.value = timeValue;
			description.value = descriptionValue;
			
			addBtn.disabled = false;
			e.target.parentElement.parentElement.remove();
		}
		
		function handleClickingNext(e) {
			let nameValue = e.target.parentElement.parentElement.children[0].children[0].textContent;
			let timeValue = e.target.parentElement.parentElement.children[0].children[1].textContent;
			let descriptionValue = e.target.parentElement.parentElement.children[0].children[2].textContent;
			
			let newLi = document.createElement('li');
			
			newLi.innerHTML = `
				<article>
					<p>${nameValue}</p>
					<p>${timeValue}</p>
					<p>${descriptionValue}</p>
				</article>
					
				<button class="archive-btn">Archive</button>
			`;

			archiveList.appendChild(newLi);
			e.target.parentElement.parentElement.remove();

			let archiveBtn = newLi.querySelector('[class="archive-btn"]');
			archiveBtn.addEventListener('click', handleClickingArchive);

			function handleClickingArchive(e) {
				addBtn.disabled = false;
				e.target.parentElement.remove();
			}
		}
	}
}