// Switch for fruit price:
// "apple" → ₹100
// "banana" → ₹40
// "mango" → ₹120
// Default → “Fruit not available”.

let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("₹100");
        break;

    case "banana":
        console.log("₹40");
        break;

    case "mango":
        console.log("₹120");
        break;

    default:
        console.log("Fruit not available");
     
}