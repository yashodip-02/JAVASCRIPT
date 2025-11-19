// Calculate your grade basis of on marks 
// 1.]if marks 80 to 100 Grade A
// 2.] 60 to 79 Grade B
// 3.] 40 to 59 Grade C
// 4.] 35 to 39 Grade D
// 5.] Under 35 you failed in exam
// 6.] when negative number or grater than 100 to show enter correct mark

let marks = 75;

if ((marks >= 80) && (marks <= 100)) {
    console.log(`You have archieve ${marks} Mark with A+ Grade`);
}

else if ((marks >= 60) && (marks <= 79)) {
    console.log(`You have archieve ${marks} Mark with B+ Grade`);
}

else if ((marks >= 40) && (marks <= 59)) {
    console.log(`You have archieve ${marks} Mark with C+ Grade`);
}

else if ((marks >= 35) && (marks <= 39)) {
    console.log(`You have archieve ${marks} Mark with D+ Grade`);
}

else if ((marks >= 0) && (marks <= 34)) {
    console.log(`You have archieve ${marks} Mark, Sorry you are Failed`);
}

else if(marks > 101){
    console.log(`you enter mark ${marks}, Sorry marks calculate in less than 100`);
}

else{
    console.log(`Your enter mark ${marks}, Sorry this is not valid, Please try again`);
    console.log("Please Try Again");
}