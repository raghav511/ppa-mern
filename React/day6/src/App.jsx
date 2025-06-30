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
    );
};

export default App;
