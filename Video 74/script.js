let btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "<i> Yuu were clicked </i>"
})// single click
btn.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<i> Yuu were clicked </i>"
})//double click
btn.addEventListener("contextmenu", () => {
    alert("Dont Right click Pls");
})//Right click
document.addEventListener("keydown", (e) => {
    console.log(e.key,e.keyCode);
})



// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent