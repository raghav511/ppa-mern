import React from "react"; // if its user defined, is it internal nodejs, node_modules
import ReactDOM from "react-dom/client";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> abbd662 (react Components import _ export, css)
import "./main.css";

import Header from "./components/Header"; // default import
import Footer from "./components/Footer"; // default import
import { Button, Main } from "./components/Main"; // named import

<<<<<<< HEAD
=======
>>>>>>> f6d466f (React App - Parcel (from Scratch))
=======
>>>>>>> abbd662 (react Components import _ export, css)
const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
    console.log("Likhilesh");
    return (
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> abbd662 (react Components import _ export, css)
            <Header />
            <Main />
            <Footer />
            <Button />
<<<<<<< HEAD
=======
            <h1>Hello from React App!!</h1>
>>>>>>> f6d466f (React App - Parcel (from Scratch))
=======
>>>>>>> abbd662 (react Components import _ export, css)
        </div>
    );
};

<<<<<<< HEAD
<<<<<<< HEAD
// reactRoot.render(App());
reactRoot.render(<App />);
=======
reactRoot.render(App());
>>>>>>> f6d466f (React App - Parcel (from Scratch))
=======
// reactRoot.render(App());
reactRoot.render(<App />);
>>>>>>> a0b415b (vite react app - import,export - starting to understand states / data of the component)
