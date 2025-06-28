import {useState} from "react";
const App=()=>{
  const welcomeText = "Hello User! Please enter your name"
  const [userName, setUserName]=useState(welcomeText);

  const CaptureName=(e)=>{
    // while(e.target.value!=
    console.log(e.target.value);
    const val = e.target.value;

    setUserName(`Hello ${val}`);
  }
  const WelcomeMessage = ()=>{
    return (
      <div>
      <h2>
        {/* Hello {userName}! Please enter your name */}
        {userName}
      </h2>
        <input type="text" name="userName" onKeyUp={CaptureName}/>
      </div>
    )
  };

  const ClearName=()=>{
    return setUserName(welcomeText);
  }

  const Greeetings=()=>{
    return (
      <div>
      <WelcomeMessage/>
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