// console.log(town) // Uncaught ReferenceError: Cannot access 'town' before initialization
// because after memory creation phase, the variable is not initialized, 
// it is set to <value unavailable>, i.e, defined but not initialized

// till here city is undefined

let town = "Bengaluru";

let city = "Delhi";
// now city is Delhi

console.log(city);

// for var, the default value is undefined
console.log(country) // this does not throw an error, because country is undefined

// for let, the default value is not defined
console.log(country) // this throws an error, because country is not defined
// (it is not accessible before initialization)

// we can call if before initialization, and redeclaration is allowed,
// so var is not a good practice
var country = "India";

// calculateSum(11, 29); // this throws an error, because calculateSum is not defined

// creating a function using function keyword and assigning it to a variable
let calculator = function calculateSum(a, b) {
    console.log("Calculating sum ...");
    console.log(a + b);
    console.log("----------");
};

console.log(calculator);

// calculateSum(11, 29);
calculator(11, 29);

// with let one problem of calling the function before declaration is solved
// but we can still overwrite the function
calculator = "hello I am a string";

console.log(calculator);

// calculator(); this will now throw, saying calculator is not a function


// ---------------------------------------
// lets use const instead of let
const flag = function getStatus(status) {
    console.log("Status is", status);
}

flag("active");

// function assignment with anonymous function keyword
const signal = function(status) {
    console.log("Status is", status);
}

signal("active");

// function assignment with arrow function
const empData = (age) => {
    console.log("Employee data is", age);
}

empData(20);


// ----------------------------------------------

// ----------------------------------------------
// // console.log(city); //error

// // city(10, 20);

// let city = function calculateSum(a, b) {
//     console.log("Calculating sum ...");
//     console.log(a + b);
//     console.log("----------");
// };

// city(10, 20);

// city = "Hi I am good";

// console.log(city);

// // with "let" keyword one issue solved: "you can call the function before declaration"

// city(50, 100); // syntax () --> function invocation

//------------------------------------------------------------
// // console.log(city); //error

// // city(10, 20);

// 2. function assignment with named function keyword
// const city = function calculateSum(a, b) {
//     console.log("Calculating sum ...");
//     console.log(a + b);
//     console.log("----------");
// };

// city(10, 20);

// city = "Hi I am good";

// console.log(city);

// // with "const" keyword both issue solved: "you can call the function before declaration"
// // with "const" keyword both issue solved: "you can create multiple functions with same name"

// city(50, 100); // syntax () --> function invocation

// ------------------------------------------------------

// // // function assignment with (anonymous function keyword)
// const city = function (a, b) {
//     console.log("Calculating sum ...");
//     console.log(a + b);
//     console.log("----------");
// };

// city(10, 20);

// ------------------------------------------------------

// // 3. function assignment with (anonymous function keyword)
// const city = function (a, b) {
//     console.log("Calculating sum ...");
//     console.log(a + b);
//     console.log("----------");
// };

// city(10, 20);

// ---------------------------------------------------------

// // 4. function assignment with (arrow function)
// the arrow function is almost same as function keyword function but with a pinch of salt

// const city = (a, b) => {
//     console.log("Calculating sum ...");
//     console.log(a + b);
//     console.log("----------");
// };

// city(10, 20);

// -----------------------------------------------------------
