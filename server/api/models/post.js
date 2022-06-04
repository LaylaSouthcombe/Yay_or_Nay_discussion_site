const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.author = data.author
        this.url = data.url
        this.topic = data.topic
        this.interactions = {
            thumbs_up: 0,
            thumbs_down: 0,
            meh: 0,
        }
        this.comments = []
        this.date = new Date()
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



}