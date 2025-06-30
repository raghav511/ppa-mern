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
    );
};

export default App;
