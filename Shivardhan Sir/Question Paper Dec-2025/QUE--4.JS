// Flatten nested array :
// input : [1,[2,[3,4],5]
// output : [1,2,3,4,5]

let a = [1, [2, [3, 4], 5]];

let result = a.flat(2);

console.log(result); 