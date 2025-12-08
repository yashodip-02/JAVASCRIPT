// Simple calculator using switch (+,-,*,/)

let num1 = 45;
let num2 = 15;

let opp= '+';

switch(opp){
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
        console.log("Invalid operator");
        break;
}   