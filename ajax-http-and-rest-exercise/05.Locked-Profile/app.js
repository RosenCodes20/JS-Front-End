async function lockedProfile() {
    let url = 'http://localhost:3030/jsonstore/advanced/profiles';
    let main = document.getElementById('main');
    main.replaceChildren();
    
    let res = await fetch(url);
    let data = await res.json();
    let values = Object.values(data);
    let counter = 1;
    for (let value of values) {
        let div = document.createElement('div');
        div.classList.add('profile');
        
        let newImg = document.createElement('img');
        newImg.src = './iconProfile2.png';
        newImg.classList.add('userIcon');
        
        let newLabel = document.createElement('label');
        newLabel.textContent = 'Lock';
        
        let newInput = document.createElement('input');
        newInput.type = 'radio';
        newInput.name = `user${counter}Locked`;
        newInput.value = 'lock';
        newInput.checked = true;
        
        let label = document.createElement('label');
        label.textContent = 'Unlock';
        
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = `user${counter}Locked`;
        input.value = 'unlock';
        
        let hr = document.createElement('hr');
        
        let labelForUsername = document.createElement('label');
        labelForUsername.textContent = 'Username';
        
        let inputUsername = document.createElement('input');
        inputUsername.type = 'text';
        inputUsername.name = `user${counter}Username`;
        inputUsername.value = `${value.username}`;
        inputUsername.disabled = true;
        inputUsername.readOnly = true;
        
        let newDiv = document.createElement('div');
        
        newDiv.classList.add(`user${counter}Username`);
        let newHr = document.createElement('hr');
        let labelForEmail = document.createElement('label');
        
        labelForEmail.textContent = 'Email:';
        let inputForEmail = document.createElement('input');
        inputForEmail.type = 'email';
        inputForEmail.name = `user${counter}Email`;
        inputForEmail.value = `${value.email}`;
        inputForEmail.disabled = true;
        inputForEmail.readOnly = true;
        
        let labelForAge = document.createElement('label');
        labelForAge.textContent = 'Age:';
        
        let inputForAge = document.createElement('input');
        inputForAge.type = 'number';
        inputForAge.name = `user${counter}Age`;
        inputForAge.value = `${value.age}`;
        inputForAge.disabled = true;
        inputForAge.readOnly = true;
        
        newDiv.appendChild(newHr);
        newDiv.appendChild(labelForEmail);
        newDiv.appendChild(inputForEmail);
        newDiv.appendChild(labelForAge);
        newDiv.appendChild(inputForAge);
        
        newDiv.style.display = 'none';
        
        let newButton = document.createElement('button');
        newButton.textContent = 'Show More';
        
        div.appendChild(newImg);
        div.appendChild(newLabel);
        div.appendChild(newInput);
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(hr);
        div.appendChild(labelForUsername);
        div.appendChild(inputUsername);
        div.appendChild(newDiv);
        div.appendChild(newButton);
        
        main.appendChild(div);
        counter++;
        
        newButton.addEventListener('click', handleClickingShowMore);
        
        function handleClickingShowMore() {
            let lockRadio = div.querySelector('[type="radio"]');

            if (!lockRadio.checked && newButton.textContent == 'Show More') {
                newDiv.style.display = 'block';
                newButton.textContent = 'Hide it';
            } else if (!lockRadio.checked && newButton.textContent == 'Hide it') {
                newDiv.style.display = 'none';
                newButton.textContent = 'Show More';
            }
        }
    }
}