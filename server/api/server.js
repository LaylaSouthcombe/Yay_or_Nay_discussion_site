const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const postRoutes = require('./controllers/posts')
server.use('/posts', postRoutes)

const userRoutes = require('./controllers/users')
server.use('/users', userRoutes)

const authRoutes = require('./controllers/auth');
server.use('/auth', authRoutes);

// Root route
server.get('/', (req, res) => res.send('Hello, client!'))

module.exports = server