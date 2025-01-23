const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
    console.log('Hey its a get request');
    res.send('Hello World2!')
})

app.post('/', (req, res) => {
    console.log('Hey its a post request');
    res.send('Hello World Post!')
})

app.put('/', (req, res) => {
    console.log('Hey its a put request');
    res.send('Hello World put!')
})

app.delete('/', (req, res) => {
    console.log('Hey its a delete request');
    res.send('Hello World delete!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get("/about", (req, res) => {
    console.log('Hey its a get request');
    res.sendFile('templates/about.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    console.log('Hey its a get request');
    res.json({ a: 1, b: 2, c: 3, d: 4,name: ["Genius","Harry"] })
})

