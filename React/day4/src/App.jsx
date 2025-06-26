<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";

const MainApp = () => {
    const [counter, setCounter] = useState(0); // 0

    // your remote can take either "direct value" OR give it a "callback"

    // const handleIncrement = () => {
    //     setCounter(counter + 1); // please change the value to 1 --> Noted!
    //     setCounter(counter + 1); // please change the value to 1 --> Noted!
    //     setCounter(counter + 1); // please change the value to 1 --> Noted!
    // };

    const handleIncrement = () => {
        setCounter((prev) => {
            return prev + 1;
        }); // please change the value to old-value + 1 --> Noted!

        setCounter((prev) => {
            return prev + 1;
        }); // please change the value to old-value + 1 --> Noted!
=======
const MainApp = () => {
    let searchText = "Hello";

    const handleSearch = (e) => {
        const val = e.target.value;
        searchText = val;
        console.log(searchText);
>>>>>>> a0b415b (vite react app - import,export - starting to understand states / data of the component)
=======
import { useState } from "react";

const MainApp = () => {
    const [counter, setCounter] = useState(0); // 0

    // const handleIncrement = () => {
    //     setCounter(counter + 1); // please change the value to 1 --> Noted!
    //     setCounter(counter + 1); // please change the value to 1 --> Noted!
    //     setCounter(counter + 1); // please change the value to 1 --> Noted!
    // };

    const handleIncrement = () => {
        setCounter((prev) => {
            return prev + 1;
        }); // please change the value to old-value + 1 --> Noted!

        setCounter((prev) => {
            return prev + 1;
        }); // please change the value to old-value + 1 --> Noted!
>>>>>>> 304137d (USE-STATE in depth - 1)
    };

    return (
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>++</button>
=======
            <input type="text" onKeyUp={handleSearch} />
            <h2>{searchText}</h2>
>>>>>>> a0b415b (vite react app - import,export - starting to understand states / data of the component)
=======
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>++</button>
>>>>>>> 304137d (USE-STATE in depth - 1)
        </div>
    );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default MainApp;
=======
export default MainApp; //default
>>>>>>> a0b415b (vite react app - import,export - starting to understand states / data of the component)
=======
export default MainApp;
>>>>>>> 304137d (USE-STATE in depth - 1)
