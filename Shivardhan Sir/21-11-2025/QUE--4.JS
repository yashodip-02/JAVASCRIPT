// Check Greade
// A grade - first class
// B grade - second class
// C grade - third class
// D grade - fourth class
// E grade - fail
 
let grade = 'B';
grade.toLocaleUpperCase()

switch (grade) {
    case 'A':
        console.log("First Class");
        break;
    case 'B':
        console.log("Second Class");
        break;
    case 'C':
        console.log("Third Class");
        break;
    case 'D':
        console.log("Fourth Class");
        break;
    case 'E':
        console.log("Fail");
        break;
    default:
        console.log("Check Your Result Again");
}