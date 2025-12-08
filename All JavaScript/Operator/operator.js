// X + Y = Z
    // X and Y is Operand
    //  + and = is Operator
    // Z is Result

//1. Arithmetic Operators
let a = 10, b = 5;
console.log("Addition: ", a + b); // 15
console.log("Subtraction: ", a - b); // 5
console.log("Multiplication: ", a * b); // 50
console.log("Division: ", a / b); // 2
console.log("Modulus: ", a % b); // 0
console.log("Exponentiation: ", a ** b); // 100000

// 2. Assignment Operators
let x = 10;
x += 5; // x = x + 5
console.log("Assignment +=: ", x); // 15

x -= 3; // x = x - 3
console.log("Assignment -=: ", x); // 12

// 3. Comparison Operators
console.log("Equal to: ", a == b); // false
console.log("Strict equal: ", a === b); // false
console.log("Not equal: ", a != b); // true
console.log("Greater than: ", a > b); // true
console.log("Less than or equal to: ", a <= b); // false

// 4. Logical Operators
let p = true, q = false;
console.log("AND: ", p && q); // false
console.log("OR: ", p || q); // true
console.log("NOT: ", !p); // false

// 5. Tnary Operators
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote: ", canVote); // Yes

// 6. typeof Operator
console.log("Type of a: ", typeof a); // number

// 7. String Concatenation Operator
let str1 = "Hello", str2 = " World";
console.log("String Concatenation: ", str1 + str2); // "Hello World"

