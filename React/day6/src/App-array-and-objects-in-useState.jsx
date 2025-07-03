// if the state of component --> component will re-render --> re-run
// how does the react compare old and new state?
// https://react.dev/reference/react/useReducer#ive-dispatched-an-action-but-the-screen-doesnt-update

import { useState } from "react";

// whenever "Object.is()" returns false --> react will consider it as value change --> re-render the component
const App = () => {
    const [users, setUsers] = useState([
        {
            username: "Likhilesh",
            city: "Mumbai",
            email: "likhilesh@programmingpathshala.com",
        },
    ]); // [{}, {}]

    console.log(users);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.username.value;
        const city = e.target.city.value;
        const email = e.target.email.value;

        if (name.length <= 2) {
            alert("Invalid name");
        } else if (city.length <= 1) {
            alert("Invalid city");
        } else if (email.length < 5) {
            alert("Invalid email");
        } else {
            console.log("-------- success ---------");
            setUsers((prev) => {
                const newArr = [...prev]; // new address but all the old values as it is

                newArr.push({
                    username: name,
                    city: city,
                    email, // ES6 syntax : if key & the value (variable name of the value is same), then write it once
                }); // push does not change the address of the array

                return newArr;
            });
        }
    };

    return (
        <>
            {/* We were getting the value from a event but the control was always with DOM */}
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="username" required></input>
                </div>
                <div>
                    <input type="email" name="email" required></input>
                </div>
                <div>
                    <input type="text" name="city" required></input>
                </div>
                <button>Add User</button>
            </form>
            <div>
                {users.map((elem) => {
                    return (
                        <div key={elem.email}>
                            <h3>{elem.username}</h3>
                            <p>{elem.email}</p>
                            <h5>{elem.city}</h5>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default App;
