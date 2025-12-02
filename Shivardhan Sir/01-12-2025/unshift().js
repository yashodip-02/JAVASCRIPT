// Add the one or more element to the first of an array

let a = [2,3,4]
a.unshift(1);
console.log(a);

let b = []
b.unshift(12,25,5)
console.log(b);

let c = ['a','b','c'];
let y = c.unshift('c')
console.log(y);

let d = [false];
d.unshift(true)
console.log(d);

let e = ['col-6'];
e.unshift("col-6");
console.log(e);

let f = [50,60]
f.unshift(10,20,30)
console.log(f);

let g = ["Rahul", "Nagesh"]
g.unshift("Yashu");
console.log(g);

let h = [20,30];
h.unshift(10);
h.shift();
console.log(h);

let i = []
h.unshift("Hello");
h.unshift("World!");
console.log(h);

const j = [1,2,3,4]
j.unshift(0);
j.pop()
console.log(j);


