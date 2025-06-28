import { useState } from "react";

// initial-render --> state is created
const App = () => {
    // let username = "Likhilesh";
    const [monitor, controller] = useState("Likhilesh"); // Likhilesh

    const handleUsername = (e) => {
        const val = e.target.value;
        // username = val;
        controller(val); // please change the value to "a" --> Noted!
        console.log("username:", monitor);
        // React uses 1 way data binding
        // Angular uses 2 way data binding
    };

    return (
        <div>
            <input type="text" onKeyUp={handleUsername} />
            <h2>{monitor}</h2>
        </div>
    );
};

export default App;
