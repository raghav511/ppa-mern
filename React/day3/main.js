import React from "react"; // if its user defined, is it internal nodejs, node_modules
import ReactDOM from "react-dom/client";

<<<<<<< HEAD
import "./main.css";

import Header from "./components/Header"; // default import
import Footer from "./components/Footer"; // default import
import { Button, Main } from "./components/Main"; // named import

=======
>>>>>>> f6d466f (React App - Parcel (from Scratch))
const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
    console.log("Likhilesh");
    return (
        <div>
<<<<<<< HEAD
            <Header />
            <Main />
            <Footer />
            <Button />
=======
            <h1>Hello from React App!!</h1>
>>>>>>> f6d466f (React App - Parcel (from Scratch))
        </div>
    );
};

<<<<<<< HEAD
// reactRoot.render(App());
reactRoot.render(<App />);
=======
reactRoot.render(App());
>>>>>>> f6d466f (React App - Parcel (from Scratch))
