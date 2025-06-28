import {useState} from "react";
const App=()=>{
  // const welcomeText = "Hello User! Please enter your name"
  const welcomeText = ""
  const [userName, setUserName]=useState(welcomeText);

  const CaptureName=(e)=>{
    // console.log(e.target.value);
    // setUserName(e.target.value);
    setUserName(e.target.value);
  }
  
  const ClearName=()=>{
    return setUserName(welcomeText);
  }

  const Greeetings=()=>{
    return (
      <div>
      <h2>
        {userName}
      </h2>
        <input type="text" name="userName" value={userName} onChange={CaptureName}/>
      </div>
    )
  }
  return (
    <div>
      <Greeetings/>
      <button onClick={ClearName}>Reset</button>
    </div>
  )
}

export default App;