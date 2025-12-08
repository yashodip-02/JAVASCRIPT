// 23 main Array method examples


// 1) push - add to end
let a = [1, 2];
a.push(3);
console.log('1 push ->', a); // [1,2,3]

// 2) pop - remove from end
let b = [1, 2, 3];
let b1 = b.pop();
console.log('2 pop ->', b, 'popped:', b1); // [1,2], 3

// 3) shift - remove from start
let c = [1, 2, 3];
let c1 = c.shift();
console.log('3 shift ->', c, 'shifted:', c1); // [2,3], 1

// 4) unshift - add to start
let d = [2, 3];
d.unshift(1);
console.log('4 unshift ->', d); // [1,2,3]

// 5) concat - join arrays
let e = [1, 2];
let f = [3, 4];
let e1 = e.concat(f);
console.log('5 concat ->', e1); // [1,2,3,4]

// 6) slice - shallow copy portion
let g = [1, 2, 3, 4];
let g1 = g.slice(1, 3);
console.log('6 slice ->', g1); // [2,3]

// 7) splice - remove/insert
let h = [1, 2, 3, 4];
let h1 = h.splice(1, 2, 8, 9); // remove 2 items at index1, insert 8,9
console.log('7 splice ->', h, 'removed:', h1); // [1,8,9,4], [2,3]

// 8) indexOf - first index
let i = [5, 6, 7, 6];
console.log('8 indexOf ->', i.indexOf(6)); // 1

// 9) lastIndexOf - last index
let j = [5, 6, 7, 6];
console.log('9 lastIndexOf ->', j.lastIndexOf(6)); // 3

// 10) includes - membership
let k = [1, 2, 3];
console.log('10 includes ->', k.includes(2)); // true

// 11) join - make string
let l = ['a', 'b', 'c'];
console.log('11 join ->', l.join('-')); // 'a-b-c'

// 12) toString - simple string
let m = [1, 2, 3];
console.log('12 toString ->', m.toString()); // '1,2,3'

// 13) forEach - every element
let n = [1, 2, 3];
let nsum = 0;
n.forEach(x => nsum += x);
console.log('13 forEach sum ->', nsum); // 6

// 14) map - transform || action on every element
let o = [1, 2, 3];
let o1 = o.map(x => x * 2);
console.log('14 map ->', o1); // [2,4,6]

// 15) filter - filter data
let p = [1, 2, 3, 4];
let p1 = p.filter(x => x % 2 === 0);
console.log('15 filter ->', p1); // [2,4]

// 16) find - first match
let q = [5, 6, 7];
console.log('16 find ->', q.find(x => x > 5)); // 6

// 17) findIndex - index of first match
let r = [5, 6, 7];
console.log('17 findIndex ->', r.findIndex(x => x > 5)); // 1

// 18) reduce - accumulate (sum)
let s = [1, 2, 3, 4];
let s1 = s.reduce((x, y) => x + y, 0);
console.log('18 reduce ->', s1); // 10

// 19) some - or work
let t = [1, 2, 3];
console.log('19 some ->', t.some(x => x > 2)); // true

// 20) every - and work
let u = [2, 4, 6];
console.log('20 every ->', u.every(x => x % 2 === 0)); // true

// 21) sort - arrangment
let v = [3, 1, 4, 2];
v.sort((x, y) => x - y);
console.log('21 sort ->', v); // [1,2,3,4]

// 22) reverse - reverse order
let w = [1, 2, 3];
w.reverse();
console.log('22 reverse ->', w); // [3,2,1]

// 23) flat - flatten one level
let x = [1, [2, 3], [4, [5]]];
console.log('23 flat ->', x.flat()); // [1,2,3,4,[5]]


