import { useState } from "react";

// initial-render (1st) --> state is created
// react will change the state --> "John" to "John"
// state change has happened! --> re-render the component --> re-run the function (line-by-line)
// re-render ==> react will not create state once again, instead it will remember the value (new value)
const App = () => {
    const [monitor, controller] = useState("John");
    console.log("fresh", monitor);

    const handleUsername = (e) => {
        const val = e.target.value;
        console.log("🟡 : val:", val);
        controller(val);
    };

    const handleCheck = (e) => {
        const key = e.key;
        console.log("🟡 : key:", key);
        if (key === "z" || (key == "v" && e.metaKey)) {
            console.log("---blocked---");
            e.preventDefault();
        }
    };

    const handlePrint1 = () => {
        console.log("Print -- div --- !!!");
    };

    const handlePrint2 = (e) => {
        console.log("Print --- btn --- !!!");
        e.preventDefault();
        // e.stopPropagation();
    };

    return (
        <div onClick={handlePrint1}>
            <input type="text" onChange={handleUsername} value={monitor} onKeyDown={handleCheck} />
            <h2>{monitor}</h2>
            <button onClick={handlePrint2}>Click me</button>
        </div>
    );
};

export default App;
