const fs = require("fs");
const fs = require("fs/promises");

console.log("Strating");

// fs.writeFileSync("genius.txt", "I am a genius")
fs.writeFile("genius2.txt", "I am a genius 2", () => {
    console.log("OK");
    fs.readFile("genius2.txt",(error,data)=>{
        console.log(error,data);
        console.log(error,data.toString());
        
        console.log();
    })
})
// Use writeFile Most of the time
// During the write and read continiously, it will make the program long which called callback hell

fs.appendFile("genius2.txt","geniusrobo",(e,d)=>{
    console.log(d);
    
})

console.log("Ending");
