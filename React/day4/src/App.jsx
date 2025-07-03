import { useState } from "react";

const MainApp = () => {
  const [counter, setCounter] = useState(0); // 0

  // your remote can take either "direct value" OR give it a "callback"

  // const handleIncrement = () => {
  //     setCounter(counter + 1); // please change the value to 1 --> Noted!
  //     setCounter(counter + 1); // please change the value to 1 --> Noted!
  //     setCounter(counter + 1); // please change the value to 1 --> Noted!
  // };

  const handleIncrement = () => {
    setCounter((prev) => {
      return prev + 1;
    }); // please change the value to old-value + 1 --> Noted!

    setCounter((prev) => {
      return prev + 1;
    }); // please change the value to old-value + 1 --> Noted!
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>++</button>
    </div>
  );
};

export default MainApp;
