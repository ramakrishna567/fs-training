let number_Of_terms = prompt("Enter No of terms do want for fabonic series");
let firstTerm = 0;
let secondTerm = 1;
let nextTerm;
for (let i = 0; i <= number_Of_terms; ++i) {
    console.log("", firstTerm);
    nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
}