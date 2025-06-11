// function  --> Reusable code
// let, const, var❌
console.log("0. Start");

console.log(getStudentScore);

const name1 = "Likhilesh";
const name2 = "Hariom";
const name3 = "Raj";

console.log("A. Made three variable");

console.log("D. Start of calculation of student scores:");

getStudentScore(name1, 20, 40); // argument

// Type 1: FUNCTION DECLARATION
// (Harmful: 1. you can call the function before declaration)
// 2. you can create multiple functions with same name
// Avoid the use of function keyword
function getStudentScore(name, score1, score2) {
    //parameter
    console.log("B. Hello", name);
    console.log("C. Your score is", score1 + score2);
}

console.log("E. Start of calculation of 2nd student scores:");

getStudentScore(name2, 30, 35); // argument

function getStudentScore() {
    //parameter
    console.log("B. Yahoooo!");
}

console.log("F. Start of calculation of 3rd student scores:");

getStudentScore(name3, 25, 35); // argument

console.log("G. End");

// 0 A D B C E B C F B C G
