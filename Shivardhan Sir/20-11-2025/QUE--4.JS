/*
    CHECK LEAP YEAR
    write a program to take year and check 
        if the year is divisible by 400 --> Leap year
        esle if divisible by 4 but not 100 --> leap year 
        else --> not a leap year
*/

let year = 2024;

if((year%4) == 0){
    console.log(`${year} Year is Leap year.`);
}

else{
    console.log(`${year} year is not a leap year.`);
    
}