let a = prompt("Enter first number")

let b = prompt("Enter Second number")

if (isNaN(a)||isNaN(b)) {
    throw SyntaxError("This is not allowed");
}

let sum = parseInt(a)+ parseInt(b)//Its use to convert string input to number

try {
    console.log(sum*x);
} catch (error) {
    console.log("Error Aagaya Bhai");
} finally{
    console.log();
    // Finally is helped in function
}

//The Trycatch stop after execution of exception block
//It will also stop to throw JS error else it throe custom errors.
