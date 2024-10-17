//JavaScript Variables, Data Types & Objects
console.log("Hey This is Tutorial 55");

console.log("Variables, Data Types & Objects");

var a = 10; //variable declaration of number datatype
var b = 6;
var c = "Harry"; //variable declaration of string datatype
console.log(a+b);
console.log("c");

//typeof operator is used to define type of a variable either number,String, Boolean, Null

/* 
Variable names can only contain letters, digits, underscores, and dollar signs.
Variable names cannot start with a digit.
Variable names are case-sensitive. 

var x = 10; // x is a number
var y = "hello"; // y is a string
var z = [1, 2, 3]; // z is an array
console.log(z); */

{
    let I= 6 //let and const is block variable
    console.log(I+a+b)
}

// const X = "Hello" None changable variable

let x = "Genius";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null
console.log(x , y , z ,p ,q ,r);
console.log(typeof x ,typeof y ,typeof z ,typeof p ,typeof q ,typeof r);

//Objects
let o = {
    name:"Genius",
    age:20,
    designation:"Backend Developer"
}
o.salary = "100cr";
o.salary = "500cr";
console.log(o);
