import { useState } from "react";

// initial-render (1st) --> state is created
// react will change the state --> "John" to "a"
// state change has happened! --> re-render the component --> re-run the function (line-by-line)
// re-render ==> react will not create state once again, instead it will remember the value (new value)
const App = () => {
    const [monitor, controller] = useState("John"); // a
    console.log("fresh", monitor);

    const handleUsername = (e) => {
        const val = e.target.value; // "a"
        controller(val); // please change the value to "a" --> Noted! --> scheduling the change
        console.log("stale:", monitor); // John
    };

    return (
        <div>
            <input type="text" onKeyUp={handleUsername} />
            <h2>{monitor}</h2>
        </div>
    );
};

export default App;
