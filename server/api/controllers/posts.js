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


module.exports = router;