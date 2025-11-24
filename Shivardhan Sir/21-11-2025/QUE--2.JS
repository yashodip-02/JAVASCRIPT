// Create a calculator using switch case
// let a = 10
// let b = 20
// let c = '+,-,*,/'
 
let num1 = 10;
let num2 = 20;
let opp = '%';
 
switch (opp) {
    case '+':
        console.log("Addition", num1 + num2);
        break;

    case '-':
        console.log("Subtraction", num1 - num2);
        break;

    case '*':
        console.log("Multiplication", num1 * num2);
        break;

    case '/':
        console.log("Division", num1 / num2);
        break;

    case '%':
        console.log("Modulus", num1 % num2);
        break;

    default:
        console.log("Not Define");
}  
 