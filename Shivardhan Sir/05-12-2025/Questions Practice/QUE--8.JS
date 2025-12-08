// Q8.Write a program that takes two numbers and an operator (+, -, *, /) and performs the calculation using a switch statement.

let num1 = 247;
let num2 = 47;
let opp = '-';

switch(opp) {
    case '+':
        console.log(num1 + num2);
        break;

    case '-':
        console.log(num1 - num2);
        break;

    case '*':
        console.log(num1 * num2);
        break;

    case '/':
        console.log(num1 / num2);
        break;

    default:
        console.log('check your input numbers and try again');
    
}