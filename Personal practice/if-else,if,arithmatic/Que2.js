/*
2. Simple Interest Calculator:
   Write a program to calculate simple interest. Declare variables for principal 
   amount, rate of interest, and time (in years). Calculate and display the simple interest.
   - Simple Interest = (principal * rate * time) / 100
*/

// notify when you work 
console.log("---------------Calculate the Simple Interest-------------------");

// get principal amount
let principalAmount = parseInt(45);

// get rate of interest 
let rateOfInterest = parseInt(12);

// get time (in years)
let time = parseInt(2);

// calculate simple interest
let simpleInterest = (principalAmount * rateOfInterest * time) / 100;

// print simple interest
console.log(simpleInterest);
