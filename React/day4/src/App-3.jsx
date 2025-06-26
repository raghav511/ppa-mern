import { useState } from "react";

// react will change the value of remote from undefined to "a"
// when-ever the state of the component change --> component is re-rendered --> re-run

// initial-render --> re-render
const MainApp = () => {
    const [monitor, remote] = useState(); // undefined

    console.log(monitor); // undefined

    const handleSearch = (e) => {
        const val = e.target.value; // a
        remote(val); // please change the value to "a" --> Noted!
        console.log(monitor); // undefined
    };

    return (
        <div>
            <input type="text" onKeyUp={handleSearch} />
            <h2>{monitor}</h2>
        </div>
    );
};

export default MainApp;
