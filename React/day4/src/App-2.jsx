// state management : manage the data in component
// state --> condition of data
// let / const (normal variables)
// creating stateful variables with help of react

import { useState } from "react";

// remove the old value and show the new value (unmount the old component & mount the new component)
// re-run the function --> :: --> re-rendering

// React component re-renders only when any of these conditions happen:
// 1. Either "State" Change 🟢
// 2. Or "Props" change 🟡

// for creating state inside a component --> a function to create and manage state :: useState hooks
// function given by react --> :: --> hooks

const MainApp = () => {
    // let searchText = "Hello";
    const [monitor, remote] = useState();

    const handleSearch = (e) => {
        const val = e.target.value;
        remote(val);
        // searchText = val;
        // console.log(searchText);
    };

    return (
        <div>
            <input type="text" onKeyUp={handleSearch} />
            <h2>{monitor}</h2>
        </div>
    );
};

export default MainApp; //default
