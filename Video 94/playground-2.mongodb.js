// Select the database to use.
use('Sigma');

// Insert a few documents into the Courses collection.
db.getCollection('Courses').insertMany([
  {
    "name": "Java",
    "price": 20000,
    "Instructor": "Genius 69"
  },
  {
    "name": "Python",
    "price": 18000,
    "Instructor": "Code Master"
  },
  {
    "name": "JavaScript",
    "price": 15000,
    "Instructor": "JS Guru"
  },
  {
    "name": "C++",
    "price": 22000,
    "Instructor": "C++ Wizard"
  },
  {
    "name": "Swift",
    "price": 25000,
    "Instructor": "iOS Pro"
  },
  {
    "name": "Kotlin",
    "price": 23000,
    "Instructor": "Android Expert"
  },
  {
    "name": "Ruby",
    "price": 17000,
    "Instructor": "Ruby Ninja"
  },
  {
    "name": "PHP",
    "price": 14000,
    "Instructor": "Web Dev Master"
  },
  {
    "name": "Go",
    "price": 26000,
    "Instructor": "GoLang Genius"
  },
  {
    "name": "Rust",
    "price": 28000,
    "Instructor": "Rust Ace"
  }
]
);

console.log('Documents inserted successfully!');
