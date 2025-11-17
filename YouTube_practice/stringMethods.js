// create string
let myStr = "Javascript";

// string length --> length property
console.log(myStr.length);

// string indices (index number)
console.log(myStr[0]);
console.log(myStr[5]);
console.log(myStr[8]);

// Template Literals
// called as -->String Interpolation
let obj = {
    item:"pen",
    price:10,
}

let output = `The cost of ${obj.item} is ${obj.price} rupees.`
console.log(output);

// \n --> new line (\n this is two character but they count one(1) );
console.log('java\nscript');

// \t --> tab space (also count is one)
console.log('java\tscript');


// String Methods

// string in uppercase
console.log(myStr.toUpperCase());

// string in lowercase
console.log(myStr.toLocaleLowerCase());

// trim method
let tr = "    Hello world!     ";
console.log(tr.trim());

// slicing
console.log(myStr.slice(3,7));

// concatinations
console.log(myStr.concat(tr));

// replace method
console.log(myStr.replace("J", "V"));

// using idex number to search character
console.log(myStr.charAt(5));




// Que ==> make the gmail user name using @, number, gmail.com

// taking the userName of user, without any spac
let userName = "nodejavascript";

// make the gUser ,by using methods
let gmailUser = `${userName}${userName.length}@gmail.com`

// print the gmail
console.log(gmailUser);
