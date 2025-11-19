// Calculate your eligable for vote

let age = 5;

if ((age <= 17) && (age >= 0)){
    console.log(`Your age is ${age}, Sorry your not eligible for vot`);
}
else if (age >= 18){
    console.log(`Your age is ${age}, Congretulations your eligible for vot`);
}

else{
    console.log(`You entered age is ${age} , Sorry this is not valid`); 
}
