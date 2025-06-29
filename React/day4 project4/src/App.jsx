import { useState } from "react";
function App() {
  const [showResult, setResult] = useState(0);
  const [showNum, setNum] = useState(0);

  const Add = () => {
    setResult(() => {
      return showNum + showResult;
    });
  };

  const Subract = () => {
    setResult(() => {
      return showResult - showNum;
    });
  };

  const Reset = () => {
    setResult(0);
  };

  const handleClick = (digit) => {
    return setNum(digit);
  };

  return (
    <div>
      <h2>Welcome Avy</h2>
      <h2>{showResult}</h2>
      <div>
        <span>
          <button
            onClick={() => {
              handleClick(1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              handleClick(2);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              handleClick(3);
            }}
          >
            3
          </button>
        </span>
      </div>
      <div>
        <span>
          <button
            onClick={() => {
              handleClick(4);
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              handleClick(5);
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              handleClick(6);
            }}
          >
            6
          </button>
        </span>
      </div>
      <div>
        <span>
          <button
            onClick={() => {
              handleClick(7);
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              handleClick(8);
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              handleClick(9);
            }}
          >
            9
          </button>
        </span>
      </div>
      <br />
      <br />
      <div>
        <button onClick={Add}>+</button>
        <button onClick={Subract}>-</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
