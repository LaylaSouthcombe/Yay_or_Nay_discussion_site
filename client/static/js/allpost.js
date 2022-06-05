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
    emoji1.innerHTML = `&#128077; ${interactions.thumbs_up}`
    // emoji1.addEventListener('click', addInteraction)
    const emoji2 = document.createElement('span')
    emoji2.className = 'emoji2'
    emoji2.innerHTML = `&#128078; ${interactions.thumbs_down}`
    // emoji2.addEventListener('click', addInteraction)
    const commentNum = document.createElement("span")
    commentNum.className = "emoji3"
    commentNum.innerHTML = `&#128172; ${data.comments.length}`
    
    const button4 = document.createElement('button')
    button4.className = 'viewMore'
    button4.textContent = 'Discussion'
   
    const emojiGroup = document.createElement('div')
    emojiGroup.className = "emojiGroup"

    emojiGroup.appendChild(emoji1)
    emojiGroup.appendChild(emoji2)
    emojiGroup.appendChild(commentNum)
    emojiGroup.appendChild(button4)
    console.log(emojiGroup)
    cardBody.appendChild(cardTitle)
    console.log(cardTitle)
    cardBody.appendChild(cardText)
    console.log(cardText)
    cardBody.appendChild(emojiGroup)
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