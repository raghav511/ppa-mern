import { useState } from "react";

const App = () => {
    const [text, setText] = useState(() => {
        const val = localStorage.getItem("my-text");
        console.log("🟡 : val:", val);
        if (val) {
            return val;
        } else {
            return "Hello!";
        }
    }); // (either pass the value or a initiator function (callback function))

    const handleChange = (e) => {
        const val = e.target.value;
        setText(val); // noted! (either pass the value or a updater function (callback function))
        localStorage.setItem("my-text", val);
    };

    return (
        <div>
            {/* REACT: controlled component */}
            <input onChange={handleChange} value={text} />
            <p>{text}</p>
        </div>
    );
};

export default App;
