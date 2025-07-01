// const student1 = {
//     name: 'Likhilesh',
//     city: "Noida",
//     college: "ABCD",
//     subjects: ["CN", "OS", "DBMS"]
// }

// const student2 = student1; // shallow

// student2.name = "Anuj";
// student2.city = "Hyderabad";

// console.log(student1)
// console.log(student2)

// ----------------------------------------------

// const student1 = {
//     name: 'Likhilesh',
//     city: "Noida",
//     college: "ABCD",
//     subjects: ["CN", "OS", "DBMS"]
// } // (ab2)

// const student2 = {...student1}; // smart (cc3)

// student2.name = "Anuj";
// student2.city = "Hyderabad";

// student2.subjects[2] = "Computer Systems";

// console.log(student1)
// console.log(student2)


// ----------------------------------


const student1 = {
    name: 'Likhilesh',
    city: "Noida",
    college: "ABCD",
    subjects: ["CN", "OS", "DBMS"]
} // (ab2)

const student2 = {
    ...student1,
    subjects: [...student1.subjects]
}; // DEEP COPY (cc3)

student2.name = "Anuj";
student2.city = "Hyderabad";

student2.subjects[2] = "Computer Systems";

console.log(student1)
console.log(student2)




