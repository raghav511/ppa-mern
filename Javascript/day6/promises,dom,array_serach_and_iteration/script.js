// const arr = ["Tata", "Mahindra", "Suzuki", "Hyundai"];

// // arr[10] = "Honda";
// arr.push("Honda");
// arr.push("Mitsubishi");

// console.log(arr);

// --------------------------------------------------------------

// const arr = ["Tata", "Mahindra", "Suzuki", "Hyundai", "Suzuki", "Honda"];

// const ans = arr.lastIndexOf("Suzuki");
// console.log("🟡 : ans:", ans);

// -------------------------------------------------------------

// const obj = {
//     // b32c
//     name: "Mahesh",
//     city: "Jaipur",
// };

// const obj2 = {
//     // a102
//     name: "Mahesh",
//     city: "Jaipur",
// };

// // reference --> memory address

// if (obj == obj2) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// --------------------------------------------------------------
// const arr = [
//     // abc123
//     {
//         // cc001
//         name: "Rajesh",
//         city: "Kanpur",
//     },
//     {
//         // db123
//         name: "Sumedh",
//         city: "Mumbai",
//     },
//     {
//         // bdc21
//         name: "Abhinav",
//         city: "Bhopal",
//     },
// ];

// const ans = arr.indexOf({ name: "Sumedh", city: "Mumbai" }); // a123ac

// console.log("🟡 : ans:", ans);

// ----------------------------------------------------------------------

// const myFunc = (a) => {
//     console.log(a);
//     if (a.name == "Sumedh") return true;
//     return false;
// };

// const arr = [
//     {
//         name: "Rajesh",
//         city: "Kanpur",
//     },
//     {
//         name: "Sumedh",
//         city: "Mumbai",
//     },
//     {
//         name: "Rajesh",
//         city: "Kolhapur",
//     },
//     {
//         name: "Abhinav",
//         city: "Bhopal",
//     },
// ];

// const ans = arr.findIndex(myFunc);
// console.log("🟡 : ans:", ans);

// ----------------------------------------------

// const cb = (a) => {
//     if (a === "suzuki") return true;
//     else return false;
// };

// const arr = ["tata", "mahindra", "suzuki"];

// // const ans = arr.indexOf("suzuki");
// // console.log(ans);

// const ans = arr.findIndex(cb);
// console.log("🟡 : ans:", ans);

// ------------------------------

const myFunc = (a, b, c) => {
    console.log(a, b, c);
    if (a.marks < 25) return { ...a, remark: "fail" };
    else return { ...a, remark: "pass" };
};

const arr = [
    {
        name: "Rajesh",
        marks: 23,
        city: "Kanpur",
    },
    {
        name: "Sumedh",
        marks: 29,
        city: "Mumbai",
    },
    {
        name: "Mohan",
        marks: 44,
        city: "Kolhapur",
    },
    {
        name: "Abhinav",
        marks: 17,
        city: "Bhopal",
    },
];

const resultArr = arr.map(myFunc);
console.log(resultArr);
