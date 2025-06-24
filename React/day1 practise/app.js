// const domRoot = document.getElementById("root");
// const listContainer = document.createElement("ul");
// domRoot.appendChild(listContainer);
// console.log(React)

// -------------
// const domRoot = document.getElementById("root");
// const ReactRoot = ReactDOM.createRoot(domRoot);

// const item1 = React.createElement("li", 
//     {
//     className:'colored-text'
//     },
//  "Item-1");

//  console.log(item1)
// const item2 = React.createElement("li", {}, "Item-2");
// const listContainer = React.createElement("ul", {}, item1,item2);

// ReactRoot.render(listContainer);

// the above is not so efficient
const domRoot = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(domRoot);


const item1 = {
    $$typeof: Symbol.for("react.element"),
    "type": "li",
    "key": null,
    "ref": null,
    "props": {
        "className": "colored-text",
        "children": "Item-1"
    },
    "_owner": null,
    "_store": {}
}

const item2 = {
    $$typeof: Symbol.for("react.element"),
    "type": "li",
    "key": null,
    "ref": null,
    "props": {
        "children": "Item-2"
    },
    "_owner": null,
    "_store": {}
}

const listItems = {
    $$typeof: Symbol.for("react.element"),
    "type": "ol",
    "key": null,
    "ref": null,
    "props": {
        "children": [item1,item2]
    },
    "_owner": null,
    "_store": {}
}

ReactRoot.render(listItems)

