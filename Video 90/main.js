const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

app.use(express.static("public"));

app.use('/blog', blog)

//Middleware 1 - Logger for Application
app.use((req, res, next) => {
    console.log(req.headers);
    req.genius = 69
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method} \n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send('Hacked by Middleware 1')
    next()
})

//Middleware 2
app.use((req, res, next) => {
    console.log('M2')
    req.genius = 420
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello About!' + req.genius)
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})