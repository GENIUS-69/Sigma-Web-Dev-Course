console.log("Genius is a Hacker");
console.log("Rohan is a Hecker");

setTimeout(() => {
    console.log("I am inside timeout");
}, 0);//It saying that run function after 2sec. But JS asynchronus nature execute line 8 first.
// If i give timeout 0ms then also it execute line 8 first.
console.log("The End");// This execute first. After 2 sec setTimeout fnc execute.

const fn = ()=>{
    console.log("Nothing");
}

const callback = (arg,fn) => {
    console.log(arg);
    fn();
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Genius",fn);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)