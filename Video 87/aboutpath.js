import path from "path";

let myPath = "C:\\CS DEPT\\VS CODE\\Sigma-Web-Dev-Course\\Video 87\\genius.txt";
console.log(path.extname(myPath));
console.log(path.dirname(myPath));
console.log(path.basename(myPath));

const name = "Sarthak"
console.log();
console.log(path.join('/','user',name,'genius.txt')) // /user/Sarthak/genius.txt
console.log(path.resolve('genius.txt'));
console.log(path.normalize('/users/galax/..//genius.txt'));