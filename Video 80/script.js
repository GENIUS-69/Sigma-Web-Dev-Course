// let obj ={
//     a:1,
//     b:"Harry"
// }

// console.log(obj);


// let animal ={
//     eats:true
// };

// let rabbit = {
//     jumps:true
// };

// rabbit.__proto__ =  animal // set rabbit.[[Prototype]]=animal.Prototype is use to add more properties in 

class animal {
    constructor(name) {
        this.name = name;
        console.log("Object is Created...");
    }

    eat() {
        console.log("khaa raha hoon");
    }
    jumps() {
        console.log("Kood Raha hoon");
    }
}

class Lion extends animal {
    constructor(name) {
        super(name)
        this.name = name;
        console.log("Object is Created and he is a lion...");
    }
    eat() {
        super.eat()
        console.log("khaa raha hoon roar");
    }
}

let a = new animal("Genius");

console.log(a);

let l = new Lion("Shera")

console.log(l);

console.log(l instanceof Lion);
console.log(a instanceof Lion);