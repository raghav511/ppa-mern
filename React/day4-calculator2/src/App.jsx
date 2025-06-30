import { useState } from "react";
import { Result } from "./Result";
import { CalculatorGrid } from "./CalculatorGrid";
import "./App.css";

function App() {
  const [total, setTotal] = useState(0);
  const [operator, setOperator] = useState("");
  const [num, setNum] = useState(0);

  return (
    <div>
      <h2>Calculator v2</h2>
      <h3>
        <Result num={num} total={total} operator={operator} />
      </h3>
      <CalculatorGrid />
    </div>
  );
}

export default App;
