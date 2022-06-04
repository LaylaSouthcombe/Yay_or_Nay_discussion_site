const express = require('express');
const router = express.Router();

const Post = require('../models/post')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.getAllPosts
        res.json({posts})
    } catch(err) {
        res.status(500).json({err})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch(err) {
        res.status(404).json({err})
    }
})

router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body.title, req.body.body, req.body.author, req.body.topic, req.body.date)
        res.json(post)
    } catch(err) {
        res.status(404).json({err})
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        const updatedPost = await post.update()
        res.json({post: updatedPost})
    } catch(err) {
        res.status(500).json({err})
    }
})

//title, body, author, topic, interactions, comments, date

module.exports = router;