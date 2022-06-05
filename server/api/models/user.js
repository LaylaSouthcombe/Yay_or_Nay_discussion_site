const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class User {
    constructor(data){
        this.username = data.username
        this.email = data.email
        this.passwordDigest = data.password_digest
    }
    
    static get all(){
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init()
                const usersData = await db.collection('users').find().toArray()
                const users = usersData.map(r => new User({ ...r, id: r._id}))
                resolve(users)
            } catch (err) {
                reject(`Error retrieving users: ${err}`)
            }
        })
    }

    static create(username, email, password){
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init()
                let userData = await db.collection('users').insertOne({ username, email, password })
                let newUser = new User(userData.ops[0])
                resolve(newUser)
            } catch (err) {
                reject(`Error creating user: ${err}`)
            }
        })
    }

    static findByEmail(email){
        return new Promise(async (res, rej) => {
            try {
                const db = await init()
                let userData = await db.collection('users').find({ email: ObjectId(email) }).toArray()
                let user = new User({...userData[0], email: userData[0].email})
                resolve(user)
            } catch (err) {
                reject(`Error retrieving user: ${err}`)
            }
        })
    }
}

module.exports = User