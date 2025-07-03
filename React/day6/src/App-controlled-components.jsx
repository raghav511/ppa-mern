import { useState } from "react";

// controlled component -- REACT

const App = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        if (name.length <= 2) {
            alert("Invalid name");
        } else if (city.length <= 1) {
            alert("Invalid city");
        } else if (email.length < 5) {
            alert("Invalid email");
        } else {
            alert("success!");
        }
    };

    return (
        <>
            <div>
                <div>
                    {/* controlled component -- REACT */}
                    <input
                        type="text"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        value={name}
                        name="username"
                        required // it doesn't work outside the form
                    ></input>
                </div>
                <div>
                    {/* controlled component -- REACT */}
                    <input
                        type="email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                        name="email"
                    ></input>
                </div>
                <div>
                    {/* controlled component -- REACT */}
                    <input
                        type="text"
                        onChange={(e) => {
                            setCity(e.target.value);
                        }}
                        value={city}
                        name="city"
                    ></input>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
                <h4>{city}</h4>
            </div>
        </>
    );
};

export default App;
