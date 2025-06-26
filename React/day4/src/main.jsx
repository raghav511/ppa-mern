import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; // default import

const domRoot = document.getElementById("root");
const reactRoot = createRoot(domRoot);

reactRoot.render(
<<<<<<< HEAD
    // <StrictMode>
    <App />
    // </StrictMode>
=======
    <StrictMode>
        <App />
    </StrictMode>
>>>>>>> a0b415b (vite react app - import,export - starting to understand states / data of the component)
);
