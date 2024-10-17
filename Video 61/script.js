let random = Math.random()

let a = prompt("Enter First No")
let b = prompt("Enter Second No")
let c = prompt("Enter operation")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}


if (random > 0.1) {
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
} else {
    c=obj[c];
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}