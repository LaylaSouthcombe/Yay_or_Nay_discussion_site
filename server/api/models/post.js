const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.author = data.author
        this.topic = data.topic
        this.interactions = {
            thumbs_up: 0,
            thumbs_down: 0,
            meh: 0,
        }
        this.comments = []
        this.date = data.date
    }
    static get getAllPosts() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const postsData = await db.collection('posts').find().toArray()
                const posts = postsData.map(p => new Post({ ...p, id: p._id}))
                resolve(posts)
            }catch(err){
                console.log(err)
                reject("Error retrieving posts")
            }
        })
    }
    static findById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                let postData = await db.collection('posts').find({ _id: ObjectId(id) }).toArray()
                let post = new Post({...postData[0], id: postData[0]._id})
                resolve(post)
            }catch (err) {
                reject("Post not found")
            }
        })
    }
    static create(title, body, author, topic, interactions, comments, date){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                let postData = await db.collection('posts').insertOne({ title, body, author, topic, interactions, comments, date })
                let newPost = new Post(postData.ops[0])
                resolve(newPost)
            }catch(err){
                reject("Error creating post")
            }
        })
    }
    update() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                let updatedPostData = await db.collection('posts').findOneAndUpdate({ _id: ObjectId(this.id) })
                let updatedPost = new Post(updatedPostData.value)
                resolve(updatedPost)
            }catch(err){
                reject("Error updating post")
            }
        })
    }
    destroy() {
        return new Promise(async(resolve, reject) => {
            try {
                const db = await init()
                await db.collection("posts").deleteOne({ _id: ObjectId(this.id) })
                resolve("Post was deleted")
            }catch(err){
                reject("Post could not be deleted")
            }
        })
    }
}

module.exports = Post;