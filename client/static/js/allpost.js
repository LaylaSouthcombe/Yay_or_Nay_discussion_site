const postsDiv = document.querySelector("#posts")

const modal = document.getElementById("postModal")
const modalClose = document.getElementsByClassName("close")[0]
const modalTitle = document.getElementById('modalTitle')
const modalDate = document.getElementById('modalDate')
const modalBody = document.getElementById('modalBody')
const modalAuthor = document.getElementById('modalAuthor')
const modalTopic = document.getElementById('modalTopic')
const modalEmoji1 = document.getElementById('modalEmoji1')
const modalEmoji2 = document.getElementById('modalEmoji2')
const modalEmoji3 = document.getElementById('modalEmoji3')
const modalComments = document.getElementById('modalComments')
const modalForm = document.getElementById('commentForm')
const modalTextArea = document.getElementById('commentText')


function appendPost(data) {
    const cardBody = document.createElement('div')
    cardBody.className = 'cardBody'
    
    const cardAuthor = document.createElement('span')
    cardAuthor.textContent = data.author

    const cardTitle = document.createElement('h5')
    cardTitle.className = 'cardTitle'
    cardTitle.textContent = data.title
    console.log(data.title)
    
    const cardTopic = document.createElement('span')
    cardTopic.textContent = data.topic

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
    button4.id = data.id
    button4.textContent = 'Discussion'
    
    button4.addEventListener('click', getModalData)
    button4.addEventListener('click', openModal)
   
    const emojiGroup = document.createElement('div')
    emojiGroup.className = "emojiGroup"

    emojiGroup.appendChild(emoji1)
    emojiGroup.appendChild(emoji2)
    emojiGroup.appendChild(commentNum)
    emojiGroup.appendChild(button4)

    cardBody.appendChild(cardAuthor)
    cardBody.appendChild(cardTitle)

    cardBody.appendChild(cardTopic)
    cardBody.appendChild(cardText)

    cardBody.appendChild(emojiGroup)

    postsDiv.append(cardBody)
}

function appendPosts(data){
    data.posts.forEach(appendPost);
}

function getAllPosts(){
    fetch('http://localhost:3000/posts/')
        .then(r => r.json())
        .then(appendPosts)
        .catch(console.warn)
}

const openModal = function() {
    modal.style.display = "block";
}

const appendModal = function(data) {
    modalTitle.textContent = data.title
    modalDate.textContent = data.date
    modalBody.textContent = data.body
    modalAuthor.textContent = data.author
    modalTopic.textContent = data.topic
    const interactions = data.interactions
    modalEmoji1.textContent = interactions.thumbs_up
    modalEmoji2.textContent = interactions.thumbs_down
    modalEmoji3.textContent = data.comments.length
    for(let i = 0; i < data.comments.length; i++){
        const comment = document.createElement('p')
        comment.textContent = data.comments[i]
        comment.className = 'postComment'
        console.log(comment)
        modalComments.appendChild(comment)
    }
}

async function getModalData(e){
    const response = await fetch(`http://localhost:3000/posts/${e.target.id}`)
    const data = await response.json()
    await appendModal(data)
}

const closeModal = function() {
    modal.style.display = "none";
    clearModalContent()
}

const clearModalContent = function() {
    modalTitle.textContent = ""
    modalDate.textContent = ""
    modalBody.textContent = ""
    modalAuthor.textContent = ""
    modalTopic.textContent = ""
    modalEmoji1.textContent = ""
    modalEmoji2.textContent = ""
    modalEmoji3.textContent = ""
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(modalComments)
}



getAllPosts()

modalClose.addEventListener ('click', closeModal)



