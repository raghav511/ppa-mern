// JS two phase execution
// line by line parsing and memory allocation
// 1. Memory creation phase --> all the variables
// and function as a whole are stored in the memory
// 2. Code execution phase
// line by line execution





// function  --> Reusable code
// let, const is very less powerful and very strict, var❌
console.log("0. Start");

const studentName1 = "raghavendra";
const studentName2 = "rama";
const studentName3 = "raju";


console.log(getStudentScore);

console.log("A. Made three variables")
// studentName1 = "raju"; // redeclaration and re-assignment is not allowed
console.log(studentName1);
let studentName4 = "raj"; // redeclaration is not allowed
studentName4 = "ravi"; // re-assignment is allowed

// Type 1: FUNCTION DECLARATION
// (Harmful: 1. you can call the function before declaration)
// 2. you can create multiple functions with same name
// Avoid the use of function keyword
function getStudentScore(studentName, score1, score2) {
    console.log("B. Hello", studentName);
    console.log("C. Your score is", score1 + score2);
}

getStudentScore(studentName1, 33, 44);

console.log("D. Calling function again");

getStudentScore(studentName2, 20, 30);
// again creating a function with same name which is allowed
// but not a good practice
// function is overwritten
function getStudentScore() {
    console.log("F. Yahoooo!");
}

console.log("E. End");


