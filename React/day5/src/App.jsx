import { useState } from "react";

// initial-render (1st) --> state is created
// react will change the state --> "John" to "John"
// state change has happened! --> re-render the component --> re-run the function (line-by-line)
// re-render ==> react will not create state once again, instead it will remember the value (new value)
const App = () => {
    const [counter, setCounter] = useState(0); // 0

    const handleIncrement = () => {
        // setCounter(counter + 1); // please change the value to 0 + 1 ==> 1 // noted
        // setCounter(counter + 1); // please change the value to 0 + 1 ==> 1 // noted
        // setCounter(counter + 1); // please change the value to 0 + 1 ==> 1 // noted
        // setCounter(counter + 1); // please change the value to 0 + 1 ==> 1 // noted
        // setCounter(counter + 1); // please change the value to 0 + 1 ==> 1 // noted
        setCounter((prev) => {
            return prev + 1;
        }); // please change the value to 0 + 1 ==> 1 // noted
        setCounter((prev) => {
            return prev + 1;
        }); // please change the value to 1 + 1 ==> 2
        setCounter((prev) => {
            return prev + 1;
        }); // please change the value to 2 + 1 ==> 3
        setCounter((prev) => {
            return prev + 1;
        }); // please change the value to 3 + 1 ==> 4
        setCounter((prev) => {
            return prev + 1;
        }); // please change the value to 4 + 1 ==> 5
    };

    return (
        <div>
            {/* <input type="text" onChange={handleUsername} value={counter} /> */}
            <h2>{counter}</h2>
            <button onClick={handleIncrement}>++</button>
        </div>
    );
};

export default App;
