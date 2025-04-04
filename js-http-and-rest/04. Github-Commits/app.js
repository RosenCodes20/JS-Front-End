function loadCommits() {
    let username = document.getElementById('username');
    let repo = document.getElementById('repo');
    
    let url = `https://api.github.com/repos/${username.value}/${repo.value}/commits`;
    
    let commits = document.getElementById('commits');
    commits.replaceChildren();
    fetch(url)
    .then(getRes)
    .then(getData)
    .catch(catchError);
    
    function getRes(res) {
        if (!res.ok) {
            newLi = document.createElement('li');
            let err = new Error('404')
            newLi.textContent = `Error: ${err} (Not Found)`
            
            commits.appendChild(newLi);
            return;
        }
        
        return res.json();
    }
    
    function getData(data) {
        for (let obj of data) {
            let newLi = document.createElement('li');
            
            newLi.textContent = `${obj.commit.author.name}: ${obj.commit.message}`;
            
            commits.appendChild(newLi);
        }
    }
    
    function catchError(err) {
        console.error(err);
    }
}