// Returns the first element in the array that satisfies the provided testing function.

// 1) 
let arr = [1, 3, 4, 6, 7];
let res = arr.find(n => n % 2 === 0);
console.log(res); // 4

// 2)
let a = [2, 4, 5, 6];
let r = a.find(x => x % 2 !== 0);
console.log(r); // 5

// 3) 
let nums = [3, 9, 12, 15];
let found = nums.find(n => n > 10);
console.log(found); // 12

// 4) 
let words = ['a', 'be', 'tree', 'four'];
let v = words.find(w => w.length > 3);
console.log(v); // 'tree'

// 5) 
let list = ['bat', 'apple', 'cat'];
let out = list.find(s => s[0] === 'a');
console.log(out); // 'apple'

// 6) 
let vals = [5, -2, 3, -1];
let neg = vals.find(n => n < 0);
console.log(neg); // -2

// 7) 
let nums2 = [2, 7, 10, 15];
let m = nums2.find(n => n % 5 === 0);
console.log(m); // 10

// 8) 
let bools = [false, false, true, false];
let t = bools.find(b => b === true);
console.log(t); // true

// 9) 
let ch = ['b', 'c', 'e', 'a'];
let v2 = ch.find(c => c === 'e');
console.log(v2); // 'e'

// 10) 
let names = ['sam', 'tom', 'rob'];
let who = names.find(s => s.includes('o'));
console.log(who); // 'tom'

