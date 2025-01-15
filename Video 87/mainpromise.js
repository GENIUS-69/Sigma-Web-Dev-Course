import fs from "fs/promises"

let a = await fs.readFile("genius2.txt");
let b = await fs.writeFile("genius3.txt", "\n\n\n\this is amazing promise");

console.log(a.toString(),b);
