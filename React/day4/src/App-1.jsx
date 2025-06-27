import { fruits } from "./dummy-data"; // named import

const App = () => {
    console.log("Likhilesh!");

    return (
        <div>
            <h2>Hello</h2>
            <ol>
                {fruits.map((elem) => {
                    return <li key={elem}>{elem}</li>;
                })}
            </ol>
        </div>
    );
};

export default App;
