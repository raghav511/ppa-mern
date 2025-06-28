import { useState } from "react";

// initial-render (1st) --> state is created
// react will change the state --> "John" to "John"
// state change has happened! --> re-render the component --> re-run the function (line-by-line)
// re-render ==> react will not create state once again, instead it will remember the value (new value)
const App = () => {
    const [monitor, controller] = useState("John");

    const handleUsername = (e) => {
        controller(e.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handleUsername} value={monitor} />
            <h2>{monitor}</h2>
            <button>Click me</button>
        </div>
    );
};

export default App;
