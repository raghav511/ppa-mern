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
import "./App.css";

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

    const [editIndex, setEditIndex] = useState(-1);
    console.log("🟡 : editIndex:", editIndex);

    const handleAddFruit = (e) => {
        e.preventDefault();

        const fruitName = e.target.fruitName.value;

        setFruits((prev) => {
            if (prev.includes(fruitName)) {
                alert("Fruit already exists!");
                return prev;
            }

            const newArr = [...prev];
            newArr.push(fruitName);

            localStorage.setItem("fruits", JSON.stringify(newArr)); // convert Array/Object --> string (JSON) :: JSON.stringify

            return newArr;
        });
    };

    const handleDelete = (idx) => {
        setFruits((prev) => {
            const newArr = [...prev];
            newArr.splice(idx, 1);

            localStorage.setItem("fruits", JSON.stringify(newArr)); // convert Array/Object --> string (JSON) :: JSON.stringify

            return newArr;
        });
    };

    const handleEdit = (e, idx) => {
        // ...
    };

    return (
        <div className="root-app">
            <form onSubmit={handleAddFruit}>
                <input type="text" placeholder="fruit name" name="fruitName" required />
                <br />
                <br />
                <button>Submit</button>
            </form>
            <div>
                {fruits.map((elem, indx) => {
                    return (
                        <div key={elem} className="card">
                            {editIndex === indx ? (
                                <form
                                    onSubmit={(e) => {
                                        handleEdit(e, indx);
                                    }}
                                    onReset={() => {
                                        setEditIndex(-1);
                                    }}
                                >
                                    <input defaultValue={elem} />
                                    <button type="submit">Update</button>
                                    <button type="reset">Cancel</button>
                                </form>
                            ) : (
                                <>
                                    <p>{elem}</p>
                                    <div>
                                        <button
                                            onClick={() => {
                                                setEditIndex(indx);
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleDelete(indx);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
>>>>>>> Likhilesh-PPA-Summer-Online-Cohort/main
    );
};

export default App;
