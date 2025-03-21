const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let sitename = "Adidas"
    let searchText = "Search Now"
    let arr = ["Hey", 54, 65];
    res.render("index", { sitename: sitename, searchText: searchText ,arr })
})

app.get('/slog/:blog', (req, res) => {
    let blogTitle = "Adidas why and when?"
    let blogContent = "Its a very good brand"
    res.render("blogpost", { blogTitle: blogTitle, blogContent: blogContent })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})