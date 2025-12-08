// The at() method returns the element at the specified index, allowing for negative integers to count from the end of the array.

// Syntax: array.at(index)

// Example No.1
let a = [10, 20, 30];
console.log(a.at(1)); // 20

// Example No.2
let b = [5, 6, 7];
console.log(b.at(-1)); // 7

// Example No.3
let c = [];
console.log(c.at(0)); // undefined

// Example No.4
let d = 'hello';
console.log(d.at(1)); // 'e'

// Example No.5
let e = 'world';
console.log(e.at(-1)); // 'd'

// Example No.6
let f = new Int8Array([1, 2, 3]);
console.log(f.at(-1)); // 3

// Example No.7
let g = [2, 4, 6, 8];
console.log(g.at(-1) + g.at(-2)); // 8 + 6 = 14

// Example No.8
let h = [[1, 2], [3, 4], [5]];
console.log(h.map(x => x.at(-1))); // [2,4,5]

// Example No.9
let i = [7, 8, 9];
let idx = 2;
console.log(i.at(idx)); // 9

// Example No.10
let j = [];
console.log(j.at(-1) ?? 'none'); // 'none'