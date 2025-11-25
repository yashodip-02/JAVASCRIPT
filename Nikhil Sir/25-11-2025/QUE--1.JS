// 1) Write a program to calculate the EMI for ₹5,00,000 for 3, 6, 9, 12, 16, 20, and 24 months using a switch-case statement. 

let month = 3;
let emiPrice = 500000;

switch(month) {
    case 3:
        console.log(`your ${month} month EMI is --> ` + emiPrice / 3);
        break;

    case 6:
        console.log(`your ${month} month EMI is --> ` + emiPrice / 6);
        break;

    case 9:
        console.log(`your ${month} month EMI is --> ` + emiPrice / 9);
        break;

    case 12:
        console.log(`your ${month} month EMI is --> ` + emiPrice / 12);
        break;

    case 16:
        console.log(`your ${month} month EMI is --> ` + emiPrice / 16);
        break;
        
    case 20:
        console.log(`your ${month} month EMI is --> ` + emiPrice / 20);
        break;
        
    case 24:
        console.log(`your ${month} month EMI is --> ` + emiPrice / 24);
        break;
        
    default:
        console.log(`${month} number is is not in list`);  
}