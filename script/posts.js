function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>readPost(data))
}

function readPost(posts){
    const postContainer = document.getElementById('post-container');
    for( const post of posts){
        const postDiv = document.createElement('div');

        postDiv.classList.add('post');
        
        postDiv.innerHTML = `
        
        <h3>post:${post.body}</h3>
        <h2>title:${post.title}</h2>
        <h2>useId:${post.userId}</h2>
        `
        postContainer.appendChild(postDiv);
    }
}