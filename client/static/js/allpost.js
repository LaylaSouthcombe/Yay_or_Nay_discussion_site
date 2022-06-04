




function getAllPosts(){
    fetch('http://localhost:3000/posts/')
        .then(r => r.json())
        .then(appendPosts)
        .catch(console.warn)
};