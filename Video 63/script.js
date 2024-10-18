//JavaScript Arrays
let arr = [1,2,3,4,5,6]

// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// arr[2]=69;
// console.log(arr);

console.log(arr,typeof arr);

console.log(arr.toString());

let arr2 = [3,6],arr3 = [7,8]

console.log(arr.join(" $"));

arr.pop(6);
console.log(arr);

arr.push(7);
console.log(arr);

arr.shift();// Use to remove element from initial
console.log(arr);

arr.unshift("Jack");// Use to add element from initial
console.log(arr);

console.log(arr.length);
console.log(arr.concat(arr2,arr3));

let sor = [1,22,14,100,52]
sor.sort()
console.log(sor.sort());
