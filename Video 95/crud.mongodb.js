//CRUD Operations in MongoDB

use("CrudDb")

//CREATE
db.createCollection("Courses")
db.Courses.insertOne({
    name: "Harry Web Dev",
    price: 0,
    assignment: 12,
    projects: 45
})

db.Courses.insertMany(
    [
        {
            "name": "Alice Frontend",
            "price": 100,
            "assignment": 15,
            "projects": 30
        },
        {
            "name": "Bob Backend",
            "price": 200,
            "assignment": 20,
            "projects": 40
        },
        {
            "name": "Charlie Full Stack",
            "price": 150,
            "assignment": 18,
            "projects": 35
        },
        {
            "name": "David UI/UX",
            "price": 120,
            "assignment": 10,
            "projects": 25
        },
        {
            "name": "Eve DevOps",
            "price": 250,
            "assignment": 22,
            "projects": 50
        },
        {
            "name": "Frank Mobile Dev",
            "price": 180,
            "assignment": 14,
            "projects": 28
        },
        {
            "name": "Grace AI Engineer",
            "price": 300,
            "assignment": 25,
            "projects": 60
        },
        {
            "name": "Hank Data Scientist",
            "price": 280,
            "assignment": 19,
            "projects": 55
        },
        {
            "name": "Ivy Cybersecurity",
            "price": 220,
            "assignment": 17,
            "projects": 45
        },
        {
            "name": "Jack Cloud Engineer",
            "price": 270,
            "assignment": 23,
            "projects": 52
        }
    ]
)

//READ
// let a = db.Courses.find({price:0})

// console.log(a);

// console.log(a.count());
// console.log(a.toArray());

// let b = db.Courses.find({price:0})
// console.log(b);
// console.log(a.count());

//UPDATE
db.Courses.updateOne({name: "Harry Web Dev"}, {$set: {price: 100}})

//DELETE
db.Courses.deleteOne({price: 100})