const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/Employee');

mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' })
})

app.get('/generate', async(req, res) => {
    // Generate a random data
    for (let i = 0; i < 10; i++) {
        let e = await Employee.create({
            name: "Harry",
            salary: 45000000,
            language: "Python",
            city: "New York",
            isManager: true
        })
        console.log(e);
        
    }

    res.render('index', { foo: 'FOO' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

