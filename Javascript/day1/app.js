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





// var city = "Delhi";
// let country = "India";
// const continent = "Asia";

// // parent variables can be access by the child function

// function displayData() {
//     console.log("** City:", city);
//     console.log("** Country:", country);
//     console.log("** Continent:", continent);
// }

// function displayCity() {
//     console.log("-- City:", city);
// }

// displayData();

// displayCity();

// -----------------------------------

// // parent variables can be access by the child function

// // temporal dead zone (TDZ) --> the area where the variable is not accessible

// function displayData() {
//     var city = "Delhi";
//     let country = "India";
//     const continent = "Asia";
// }

// displayData();

// console.log("** City:", city);
// console.log("** Country:", country);
// console.log("** Continent:", continent);

// ---------------------------------------

// function displayData() {
//     if (true) {
//         var city = "Delhi"; // function scoped
//         let country = "India"; // block scoped
//         const continent = "Asia"; // block scoped
//         console.log("** Country:", country);
//     }

//     console.log("** City:", city);
//     console.log("** Country:", country);
//     console.log("** Continent:", continent);
// }

// displayData();

// ---------------------------------------

// lexical scope in js -->

let age = 10;

const printAge = () => {
    age = age + 1;
    console.log("Age:", age);
};

printAge();

printAge();

printAge();

age = 30;

printAge();

printAge();
