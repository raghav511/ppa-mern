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
