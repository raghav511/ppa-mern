// console.log(window);
// const text = window.prompt("What is your name?");
// console.log(window.innerHeight);
// console.log(window.innerWidth);

// DOM

// console.log(window.document);
// console.dir(window.document);
// console.dir(window.document.body);
// console.dir(window.document.body.children);
// console.dir(window.document.body.children[1]);
// console.dir(window.document.body.children[1].children[1]);
// console.dir(window.document.body.children[1].children[1].children[0]);

// const headingElement = window.document.body.children[1].children[1].children[0];

// headingElement.innerHTML = "Document Object Model";
// headingElement.style.backgroundColor = "lime";

// ------------------- methods that you can use to easily access elements as per your requirement -------------------

// ----------------- 1. getElementsByTagName --> it returns a HTML collection --> [ ]
// const headings = document.getElementsByTagName("h2");

// const secondHeading = headings[1];

// // -------------------------------------------------------
// secondHeading.innerText = "Hello from DOM!";
// secondHeading.style.padding = "1rem";
// secondHeading.style.backgroundColor = "chocolate";
// // -------------------------------------------------------

// const elem = document.getElementsByTagName("h6");

// elem.style.textAlign = "center";

// --------------------------------------------------------
// ----------------- 2. getElementsByClassName --> it returns a HTML collection --> [ ]

// const elements = document.getElementsByClassName("text-brown");
// console.log("🟡 : elements:", elements);

// setTimeout(() => {
//     for (let elem of elements) {
//         elem.style.color = "brown";
//     }
// }, 5000);

// ----------------- 3. getElementById --> it returns an element or null

// const firstTitle = document.getElementById("title-1");

// firstTitle.style.textDecoration = "overline";

// ----------------- 4. querySelectorAll (more powerful) --> it returns nodeList --> [ ]

// const elements1 = document.querySelectorAll("a");
// console.log("🟡 : elements:", elements1);

// const elements2 = document.querySelectorAll(".text-brown");
// console.log("🟡 : elements:", elements2);

// const elements3 = document.querySelectorAll("#title-1");
// console.log("🟡 : elements:", elements3);

// const elements4 = document.querySelectorAll("p > a");
// console.log("🟡 : elements:", elements4);

// elements4[0].style.backgroundColor = "yellow";

// // ----------------- 5. querySelector (powerful) --> it returns element or null

// const elements11 = document.querySelector("a");
// console.log("🟡 : elements:", elements11);

// const elements21 = document.querySelector(".text-brown");
// console.log("🟡 : elements:", elements21);

// const elements31 = document.querySelector("#title-1");
// console.log("🟡 : elements:", elements31);

// const elements41 = document.querySelector("p > a");
// console.log("🟡 : elements:", elements41);

// // elements41.style.backgroundColor = "yellow";

// ------------------------------------------------------------
