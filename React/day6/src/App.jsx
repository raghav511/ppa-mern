<<<<<<< HEAD
// un-controlled component -- REACT
const App = () => {
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
            alert("success!");
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
            <div></div>
        </>
=======
import { useState } from "react";

const App = () => {
    const [fruits, setFruits] = useState(() => {
        const savedFruits = localStorage.getItem("fruits"); // text (string) (JSON)
        if (savedFruits) {
            const arr = JSON.parse(savedFruits); // convert string (JSON) --> Array/Object :: JSON.parse
            return arr;
        } else {
            return [];
        }
    });

    const handleAddFruit = (e) => {
        e.preventDefault();

        const fruitName = e.target.fruitName.value;

        setFruits((prev) => {
            const newArr = [...prev];

            newArr.push(fruitName);

            localStorage.setItem("fruits", JSON.stringify(newArr)); // convert Array/Object --> string (JSON) :: JSON.stringify

            return newArr;
        });
    };

    return (
        <div>
            <form onSubmit={handleAddFruit}>
                <input type="text" placeholder="fruit name" name="fruitName" required />
                <br />
                <br />
                <button>Submit</button>
            </form>
            <div>
                {fruits.map((elem) => {
                    return (
                        <div key={elem}>
                            <p>{elem}</p>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    );
                })}
            </div>
        </div>
>>>>>>> Likhilesh-PPA-Summer-Online-Cohort/main
    );
};

export default App;
