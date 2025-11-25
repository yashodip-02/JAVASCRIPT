// Switch on country code:
// 91 → India
// 1 → USA
// 44 → UK
// Default → “Unknown country”.

let code = 91;

switch (code) {
    case 91:
        console.log("India");
        break;

    case 1:
        console.log("USA");
        break;

    case 44:
        console.log("UK");
        break;

    default:
        console.log("Unknown country");
}