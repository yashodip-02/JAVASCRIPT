// 1).Given an array of registered students, check whether a new student name exists using includes().
// If exists → print “Already Registered”, else → add using push(). 

let arr = ['yash','shubham','mayu','pratik'];

if (arr.includes('mayu')) {
    console.log('Already Resistered');
}

else{
   arr.push('samir')
    console.log(arr);
}