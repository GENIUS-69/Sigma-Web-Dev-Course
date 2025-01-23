const express = require('express')
const router = express.Router()

//define home page router
router.get('/', (req, res) => {
    res.send('Blog Home page')
})

//define about route
router.get('/about', (req, res) => {
    res.send('About birds')
})

//define about route
router.get('/blogpost/:slug', (req, res) => {
    res.send(`fetch blogpost for ${req.params.slug}`)
})

module.exports = router