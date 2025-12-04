// Creates a new array with all elements that pass the test implemented by the provided function.


// Example No.1
let numbers = [1, 2, 3, 4, 5, 6];
let even = numbers.filter(num => num % 2 === 0);
console.log(even); 

// Example No.2 
let words = ['apple', 'banana', 'grape', 'kiwi', 'mango'];
let long = words.filter(word => word.length > 3);
console.log(long);    

// Example No.3 
let mixed = [10, 'hello', 20, 'world', 30, true];
let num = mixed.filter(item => typeof(item) === 'number');
console.log(num); 

// Example No.4 
let age = [15, 22, 18, 30, 12, 25];
let child = age.filter(age => age < 18);
console.log(child); 

// Example No.5 
let scores = [45, 78, 88, 92, 67, 54];
let sco = scores.filter(score => score >= 70);
console.log(sco);

// Example No.6 
let fruits = ['apple', 'banana', 'cherry'];
let its = fruits.filter(fruit => fruit.includes('a'));
console.log(its);  

// Example No.7 
let temperature = [72, 85, 90, 60, 45, 100];
let hot = temperature.filter(temp => temp > 80);
console.log(hot);

// Example No.8 
let cities = ['new york','mumbai','pune'];
let stay = cities.filter(city => city.length > 7);
console.log(stay);

// Example No.9 
let ages = [12, 25, 30, 15, 40, 18];
let adult = ages.filter(age => age >= 18);
console.log(adult);

// Example No.10 
let price = [100, 250, 300, 150, 400];
let rate = price.filter(price => price > 200);
console.log(rate);
