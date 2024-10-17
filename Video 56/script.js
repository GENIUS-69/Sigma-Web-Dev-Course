console.log("Hello Im tutorial 56")
let age = 17
let grace = 2

/*
Arithmetic Operators
console.log(age+grace)
console.log(age-grace)
console.log(age*grace)
console.log(age/grace)
console.log(age%grace)
console.log(age**grace)
*/

/*
Assignment Operators => +=,-=,*=,/=,%=,**=(for power of first component:x**=y)
console.log(age**=grace);
*/

console.log(age**=grace);
/* comparision operators:
== :equalto
===: equal value and type
!==: not equal value or type
> : greater than
< : less than
>= : greater than equal to
<= : less than equal to
*/
/*
logical operator
&& : Logical AND
&& : Logical OR
! : Logical NOT
 */
// console.log(a>b?"10":"20")
let a=10,b=5,c=15

if (a>b && a>c) {
    console.log(a+" is greatest");
}
else if(b>c) {
    console.log(b+" is greatest");
}else{
    console.log(c+" is greatest");
}