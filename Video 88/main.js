const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))//use to public files

// app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch intro-to-js from db
    console.log(req.params);//{ slug: 'intro-to-padosi' }
    console.log(req.query);//{ mode: 'dark', region: 'in' }
    
    
    res.send(`Hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro-to-js from db
//     res.send('Hello Introduction to JavaScript!')
// })

app.get('/blog/intro-to-python', (req, res) => {
    // logic to fetch intro-to-python from db
    res.send('Hello Introduction to Python!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

