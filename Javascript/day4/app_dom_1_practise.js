// bom
// console.log(window)
// console.dir(window)
// console.dir(window.location)

// DOM
// console.log(window.document)

console.dir(window.document.body.children[1].children[1].children[0]);

const headingElement = window.document.body.children[1].children[1].children[0];

headingElement.innerHTML='DOCUMENT OBJECT MODEL';
headingElement.style.backgroundColor='gold'
// the above way is difficult to remember and eye

// there are method to access elements
// 1 . getElementsByTagName
const headings = document.getElementsByTagName("h2")
console.log(headings)

// 2. getElementById
const firstTitle = document.getElementById("title-1")

firstTitle.style.border='2px solid red'

// 3. getElementsByClassName
const paragraphs = document.getElementsByClassName("text-brown")
console.log(paragraphs)
paragraphs[0].style.border='2px solid blue'

// 4. QuerySelectorAll, return NodeList
const elements = document.querySelectorAll("p>a");
console.log(elements);

// 5. QuerySelector, gets first element that matches the selector



