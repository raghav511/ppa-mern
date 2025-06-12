var city = "panjim";
var state = "goa";
var country = "india";

function showData() {
    console.log("City:", city);
    console.log("State:", state);
    console.log("Country:", country);
}

showData(); // even though the variables are not defined in the function,
// they are accessible because of the lexical scope, 
// i.e, the function is able to access the variables from the parent scope

// ---------------------------------------

function showCity() {
   if (true) {
    var city1 = "Delhi";
    let state1 = "Delhi";
    const country1 = "India";
}
console.log("City:", city1); 
console.log("State:", state1);
console.log("Country:", country1);
}






console.log("City:", city1);
console.log("State:", state1);
console.log("Country:", country1);


showCity();





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
    age = age + 1; // the function rememebers the value of the parent variable
    console.log("Age:", age);
};

printAge(); // 11

printAge(); // 12

printAge(); // 13

age = 30;

printAge();

printAge();
