console.log('Genius')

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random no is not supporting you")
    } else {
        setTimeout(() => {
            console.log("Yes Im done")
            resolve("Genius")
        }, 3000);
    }
})

prom1.then((a) => {
    console.log(a);
})