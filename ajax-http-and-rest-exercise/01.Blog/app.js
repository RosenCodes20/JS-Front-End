function attachEvents() {
    let loadPostsBtn = document.getElementById('btnLoadPosts');
    let btnViewPosts = document.getElementById('btnViewPost');
    let select = document.getElementById('posts');
    let postBody = document.getElementById('post-body');
    let postTitle = document.getElementById('post-title');
    let postComments = document.getElementById('post-comments');
    
    loadPostsBtn.addEventListener('click', handleClickingLoadPostsBtn);
    btnViewPosts.addEventListener('click', handleClickingViewPostsBtn);
    let posts = {};
    async function handleClickingLoadPostsBtn(e) {
        e.preventDefault();
        let url = 'http://localhost:3030/jsonstore/blog/posts'
        let res = await fetch(url);
        posts = await res.json();
        
        let entries = Object.entries(posts);
        
        for (let [key, value] of entries) {
            let newOption = document.createElement('option');
            newOption.value = key;
            newOption.textContent = value.title;
            select.appendChild(newOption);
        }
    }
    
    async function handleClickingViewPostsBtn(e) {
        e.preventDefault();
        let selectedPost;
        postComments.replaceChildren();
        
        for (let post of select) {
            if (post.selected) {
                selectedPost = post;
            }
        }

        let postData = posts;
        postData = postData[selectedPost.value]
        postTitle.textContent = postData['title'];
        postBody.textContent = postData['body'];

        let urlForComments = 'http://localhost:3030/jsonstore/blog/comments';
        
        let resForComments = await fetch(urlForComments);
        let dataForComments = await resForComments.json();
        
        let comments = [];
        
        let entries = Object.entries(dataForComments);
        
        for (let [key, value] of entries) {
            if (value['postId'] == selectedPost.value) {
                comments.push(value);
            }
        }
        
        for (let comment of comments) {
            let newLi = document.createElement('li');
            
            newLi.id = comment['id'];
            newLi.textContent = comment.text;
            
            postComments.appendChild(newLi);
        }
    }
}

attachEvents();