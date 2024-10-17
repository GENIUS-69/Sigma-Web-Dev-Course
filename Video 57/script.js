console.log("I am a tutorial of Loops");

for (let I = 0; I <= 10; I++) {
    console.log(I);
}

let obj = {
    name: "Genius",
    age: 20,
    grade: "A+",
    company: "QSpider"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element);
}

for (const c of "Genius") {
    console.log(c);
    
}

let i = 0
while (i<6) {
    console.log(i);
    i++;
}

let j = 10;
do {
    j--;
    console.log(j);
} while (j>0);