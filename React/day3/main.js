import React from "react"; // if its user defined, is it internal nodejs, node_modules
import ReactDOM from "react-dom/client";

import "./main.css";

import Header from "./components/Header"; // default import
import Footer from "./components/Footer"; // default import
import { Button, Main } from "./components/Main"; // named import

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
    console.log("Likhilesh");
    return (
        <div>
            <Header />
            <Main />
            <Footer />
            <Button />
        </div>
    );
};

reactRoot.render(App());
