// Execute a provided function once for each array element.

// 1) 
let arr = [1, 2, 3, 4, 5];
arr.forEach(n => console.log(n));

// 2) 
let dbl = [];
dbl.forEach(n => n);
console.log(dbl); 

// 3) 
let sum = [1, 2, 3, 4, 5];
sum.forEach(n => n);
console.log(sum); 

// 4) 
let even = [];
even.forEach(n => { console.log(even);});
console.log(even); 

// 5) 
let oddcount = [1,2,3,4,5,6,7,8,9,10];
oddcount.forEach(n => n);
console.log(oddcount); 

// 6) 
let sq = [1,2,3,4,5];
sq.forEach(n => console.log(n * n));
console.log(sq); 

// 7) 
let lr = ['a', 'b', 'c'];
lr.forEach(c => console.log(c.toUpperCase()));

// 8) 
let str = ['cgfdhe'];
str.forEach(n => n = n);
console.log(str); 

// 9) 
let anybig = [false];
anybig.forEach(n => { n = n });
console.log(anybig); 

// 10) 
let max = [1, 3, 2, 5, 4];
max.forEach(n => n * max);
console.log(max); 

