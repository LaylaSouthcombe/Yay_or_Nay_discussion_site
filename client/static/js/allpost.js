const postsDiv = document.querySelector("#posts")
console.log(postsDiv)
function appendPost(data) {
    const cardBody = document.createElement('div')
    cardBody.className = 'cardBody'
    
    const cardTitle = document.createElement('h5')
    cardTitle.className = 'cardTitle'
    cardTitle.textContent = data.title
    console.log(data.title)
    const cardText = document.createElement('p')
    cardText.className = 'cardText'
    cardText.textContent = data.body
    
    const interactions = data.interactions

    const emoji1 = document.createElement('span')
    emoji1.className = 'emoji1'
    emoji1.innerHTML = `&#128293; ${interactions.thumbs_up}`
    // emoji1.addEventListener('click', addInteraction)
    const emoji2 = document.createElement('span')
    emoji2.className = 'emoji2'
    emoji2.innerHTML = `&#128151; ${interactions.thumbs_down}`
    // emoji2.addEventListener('click', addInteraction)
    const emoji3 = document.createElement('span')
    emoji3.className = 'emoji3'
    emoji3.innerHTML = `&#11088; ${interactions.meh}`
    // emoji3.addEventListener('click', addInteraction)
    
    
    const button4 = document.createElement('button')
    button4.className = 'viewMore'
    button4.textContent = 'View more'
   
    const btnGroup = document.createElement('div')

    btnGroup.appendChild(emoji1)
    btnGroup.appendChild(emoji2)
    btnGroup.appendChild(emoji3)
    btnGroup.appendChild(button4)
    console.log(btnGroup)
    cardBody.appendChild(cardTitle)
    console.log(cardTitle)
    cardBody.appendChild(cardText)
    console.log(cardText)
    cardBody.appendChild(btnGroup)
    console.log(cardBody)
    postsDiv.append(cardBody)
    
}


function appendPosts(data){
    data.posts.forEach(appendPost);
};



function getAllPosts(){
    fetch('http://localhost:3000/posts/')
        .then(r => r.json())
        .then(appendPosts)
        .catch(console.warn)
};

getAllPosts()