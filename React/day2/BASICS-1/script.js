// const domRoot = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(domRoot);

// /* <div> <h1>Title</h1>< <p>Description</p> </div> */

// const title = {
//     $$typeof: Symbol.for("react.element"),
//     ref: null,
//     key: null,
//     type: "h1",
//     props: {
//         children: "Title",
//     },
// }; // react element :: js object which represents desired state of UI.

// const p = {
//     $$typeof: Symbol.for("react.element"),
//     ref: null,
//     key: null,
//     type: "p",
//     props: {
//         children: "Description",
//     },
// };

// const div = {
//     $$typeof: Symbol.for("react.element"),
//     ref: null,
//     key: null,
//     type: "div",
//     props: {
//         children: [title, p],
//     },
// };

// reactRoot.render(div); // react root should have only element

// -----------------------------------------------------------------

// const domRoot = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(domRoot);

// /* <div> <h1>Title</h1>< <p>Description</p> </div> */

// const title = React.createElement("h1", {}, "Title"); // <h1 className="" placeholder="">Title</h1> : JSX
// // (Javascript Syntax Extension)

// const p = React.createElement("p", {}, "Description");

// const div = React.createElement("div", {}, [title, p]);

// reactRoot.render(div);

// --------------------------------------------------------------------

// const Card1 = (
//     <div className="card">
//         <h1>Warning!</h1>
//         <p>Description</p>
//     </div>
// ); // react element

// const Card2 = (
//     <div className="card">
//         <h1>Notice...</h1>
//         <p>Description</p>
//     </div>
// ); // react element

// const Card3 = (
//     <div className="card">
//         <h1>Invitation</h1>
//         <p>Description</p>
//     </div>
// ); // react element

// const Card4 = (
//     <div className="card">
//         <h1>Journey Plan</h1>
//         <p>Description</p>
//     </div>
// ); // react element

// const Container = (
//     <div>
//         {Card1}
//         {Card2}
//         {Card3}
//         {Card4}
//     </div>
// );

// const domRoot = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(domRoot);
// reactRoot.render(Container);

// -------------------------------------------------------

// React Element
const Card1 = (
    <div className="card">
        <h1>Basic</h1>
        <p>Description</p>
    </div>
);

// React Component (functional) :: function (returns React Element)
// React Component (return react element)
const Card = (obj) => {
    return (
        <div className="card">
            <h1>{obj.title}</h1>
            <p>--------</p>
        </div>
    );
};

// arguments to the component are called PROPs
// :: Props are arguments passed into React components ::
// ::           argument     --->    functions  ::
const Container = (
    <div>
        {Card1}
        {Card({ title: "Notice..." })}
        {Card({ title: "Invitation" })}
    </div>
);

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);
reactRoot.render(Container);
