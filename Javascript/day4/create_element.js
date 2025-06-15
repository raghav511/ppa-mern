const headingElement = document.createElement("h2");
headingElement.innerHTML = "Hello World, from createElement";
console.log("headingElement", headingElement);


const rootElement = document.getElementById("root");

// append, prepend, insert

rootElement.append(headingElement);


const newHeading = document.createElement("h1");
newHeading.innerText = "ABTS College Students";

const bodyElement = document.getElementById("root");  
bodyElement.append(newHeading);

const students = [{
   name: "John",
   age: 20,
   city: "New York"
},
{
    name: "Jane",
    age: 21,
    city: "Los Angeles"
},
{
    name: "Jim",
    age: 22,
    city: "Chicago"
}
]


const studentElement = document.createElement("ul");
studentElement.style.backgroundColor="chocolate";
studentElement.className="parent-list"; 
console.log(studentElement);
rootElement.append(studentElement);
for (student of students){
    const li = document.createElement("li");
    li.innerText = `${student.name} : ${student.age} : ${student.city}`; // innerText is preferred over innerHTML, less powerful is always good
    studentElement.append(li);
}


