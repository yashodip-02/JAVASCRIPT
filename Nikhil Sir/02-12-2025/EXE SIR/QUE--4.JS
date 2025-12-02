// 4).You have three arrays representing different categories of data.
// Based on a user’s selection (1, 2, or 3), you need to merge list1 with either list2 or list3 using concat().
// Use a switch-case statement to perform the correct operation and print the merged result.

let list1 = [1,2,3,4];
let list2 = [10,20,30,40];
let list3 = [100,200,300,400];

let input = 1;
let merged;

switch(input){
    case 1:
        merged = list1.concat(list2);
        console.log(merged);
        break;

    case 2:
        merged = list1.concat(list3);
        console.log(merged);
        break;

    case 3:
        merged = list1.concat(list2,list3);
        console.log(merged);
        break;

    default:
        console.log('Invalid Input');
}