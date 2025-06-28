import {useState} from "react";
const App=()=>{

  const [userName, setUserName]=useState("Dear");

  const welcomeMessage = `Hello ${userName}! Please enter your name`;

  const ClearName=()=>{
    return setUserName(" ");
  }

  const addName=(e)=>{
    console.log(e.value);
  }
  
  const AddNameEvent=()=>{
    document.addEventListener('keyup',addName);
  }
  const Greeetings=()=>{
    return (
      <div>
      {welcomeMessage}
      <AddNameEvent/>
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