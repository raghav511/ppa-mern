import {useState} from "react";
const App=()=>{
  const [count, setCounter] = useState(0);
  const Add=()=>{
    setCounter((prev)=>{
      // when count is const, how is it increasing???
      console.log(count);
      return prev+1;
    })
  }
  const Subract=()=>{
    setCounter((prev)=>{
      return prev-1;
    })
  }
  const Reset=()=>{
    return setCounter(0);
  }
  return(
    <div className="Counter">
      <h2>{count}</h2>
      <button onClick={Add}>Add</button>
      <button onClick={Subract}>Subract</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default App;