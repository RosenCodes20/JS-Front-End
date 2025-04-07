function solution() {
    let url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let section = document.getElementById('main');
    
    async function loadArticles() {
        let res = await fetch(url);
        
        let data = await res.json();
        
        for (let info of data) {
            let accordionDiv = document.createElement('div');
            accordionDiv.classList.add('accordion');
            
            let divInfo = document.createElement('div');
            divInfo.classList.add('head');
            let newSpan = document.createElement('span');
            newSpan.textContent = info.title;
            
            let newBtn = document.createElement('button');
            
            newBtn.classList.add('button');
            newBtn.id = info._id;
            
            newBtn.textContent = 'More';
            
            let extraDiv = document.createElement('div');
            extraDiv.classList.add('extra');
            
            let newP = document.createElement('p');
            extraDiv.appendChild(newP);
            extraDiv.style.display = 'none';
            
            divInfo.appendChild(newSpan);
            divInfo.appendChild(newBtn);
            accordionDiv.appendChild(divInfo);
            accordionDiv.appendChild(extraDiv);
            section.appendChild(accordionDiv);
            
            newBtn.addEventListener('click', handleClickingMoreBtn);
            
            async function handleClickingMoreBtn() {
                let currUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/';
                let res = await fetch(currUrl + info._id);
                let data = await res.json();
                
                if (newBtn.textContent == 'More') {
                    newP.textContent = data.content;
                    extraDiv.style.display = 'block';
                    newBtn.textContent = 'Less';
                } else if (newBtn.textContent == 'Less') {
                    extraDiv.style.display = 'none';
                    newBtn.textContent = 'More';
                }
            }
        }
    }
    
    loadArticles();
}

solution();