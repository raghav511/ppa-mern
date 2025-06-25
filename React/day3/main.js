import React from "react"; // if its user defined, is it internal nodejs, node_modules
import ReactDOM from "react-dom/client";

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
  console.log("Likhilesh");
  return (
    <div>
      <h1>Hello from React App!!</h1>
    </div>
  );
};

reactRoot.render(App());
