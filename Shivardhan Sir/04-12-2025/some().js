// Tests whether at least one element passes the provided function

// Syntax: array.some(element, index, array)

// Example: 1
let a1 = [1, 3, 5, 7];
let r1 = a1.some(n => n % 2 === 0);
console.log(r1);  

// Example: 2
let a2 = [10, 20, 30, 100];
let r2 = a2.some(n => n > 50);
console.log(r2);  

// Example: 3
let a3 = [-5, -2, 3, 8];
let r3 = a3.some(n => n < 0);
console.log(r3);  

// Example: 4
let a4 = ['bat', 'cat', 'dog'];
let r4 = a4.some(s => s[0] === 'a');
console.log(r4);  

// Example: 5
let a5 = ['hi', 'bye', 'ok'];
let r5 = a5.some(s => s.length > 3);
console.log(r5);  

// Example: 6
let a6 = [7, 11, 15, 19];
let r6 = a6.some(n => n % 5 === 0);
console.log(r6);  

// Example: 7
let a7 = [2, 4, 6, 8];
let r7 = a7.some(n => n === 0);
console.log(r7);  

// Example: 8
let a8 = [false, false, true];
let r8 = a8.some(b => b === true);
console.log(r8);  

// Example: 9
let a9 = [100, 500, 2000];
let r9 = a9.some(n => n > 1000);
console.log(r9);  

// Example: 10
let a10 = ['apple', 'dog', 'cat'];
let r10 = a10.some(s => s.includes('o'));
console.log(r10);  