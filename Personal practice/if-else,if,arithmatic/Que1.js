/*
1. Rectangle Area & Perimeter:
   Write a program that takes the length and width of a rectangle as variables 
   and calculates its area and perimeter. Log the results to the console.
   - Area = length * width
   - Perimeter = 2 * (length + width)
*/

// get notify when you work
console.log("------------- Calculate the Area and Perimeter of Rectangle -------------");

// get lenth of rectangle
let length = parseInt(1);
console.log("Length :", length);

// get width of rectangle
let width = parseInt(10);
console.log("Width :", width);

// calculate of the Area
const Area = length * width;
console.log("Area of rectangle is :", Area);

// calculate of the Perimeter
const Perimeter = 2 * Area;
console.log("Rectangle Perimeter is :", Perimeter);
