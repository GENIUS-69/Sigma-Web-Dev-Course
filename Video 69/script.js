let a = prompt("Enter a number")

function factorial(n) {
    if (n==0||n==1) {
        return 1;
    }
    return n*(factorial(n-1))
}
result = factorial(a)

alert(result);
