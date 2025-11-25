// 2) Write a JavaScript program using a switch-case statement to calculate the discount on a product based on its price 
//        Apply a 20% discount if the price is ₹10000 or more,
//         a 10% discount if the price is ₹5000 or more,
//         and no discount for prices below ₹1000.

let discount = 55000;

switch(true){
    case (discount >= 10000):
        console.log("you get 20% Discount --> " , discount  * 0.20);
        break;

    case (discount >= 5000):
        console.log("you get 10% Discount --> " , discount  * 0.10);
        break;

    case (discount >= 1000):
        console.log("No Discount");
        break;

    default:
        console.log("Vist Again");
}