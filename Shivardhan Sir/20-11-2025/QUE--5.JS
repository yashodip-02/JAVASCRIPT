/*
CHECK IF CHARACTER IS VOWEL OF CONSTANT
    Take a single character from the user if its a,e,i,o,u (upperCase/Lowrcase)
    print --> Vowel
    else --> print "Constant"    
*/  

let char = "a";
let lowchar = char.toLowerCase();

if( (lowchar === "a") || (lowchar === "e") ||  (lowchar === "i") || (lowchar === "o") || (lowchar === "u") ) {
    console.log(`${char} is Vowel.`);
}

else{
    console.log(`${char} is Constant.`);
    
}