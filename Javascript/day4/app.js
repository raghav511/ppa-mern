const students = [
    {
        name: "Likhilesh",
        year: "2022",
    },
    {
        name: "Mohan",
        year: "2023",
    },
    {
        name: "Raj",
        year: "2022",
    },
    {
        name: "Ramesh",
        year: "2019",
    },
];

const newHeading = document.createElement("h2");
newHeading.innerText = "ABCD College Graduates";

const rootElement = document.getElementById("root");

rootElement.append(newHeading);

const newList = document.createElement("div");

newList.className = "parent-list";
// newList.classList
// newList.setAttribute

rootElement.append(newList);

for (let student of students) {
    const heading = document.createElement("h4");
    heading.innerHTML = `${student.name}`;
    const para = document.createElement("p");
    para.innerHTML = `${student.year}`; // using innerHTML is risky??
    // listItem.innerText = `${student.name} <del>${student.year}</del>`; // always use innerText as long as possible
    // listItem.innerHTML = `${student.name} <del>${student.year}</del>`; // always use innerText as long as possible
    // listItem.innerText = student.name;
    newList.append(heading);
    newList.append(para);
}
