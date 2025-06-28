import { useState } from 'react';


// A component where you have two inputs to type your name and city, 
// and one button to click. 
// When the user types his name and city, and then clicks on the button, 
// then he should see his name and city on screen.

function App() {
  // const studentName, setStudentName = useState("");

  const AddName=()=>{
    return(
    <div>
        <label for="studentName">Student Name</label>
        <input type="text" name="studentName" id="studentName"/>
      </div>
    )
  }
  const AddCity=()=>{
    return(
    <div>
      <label>City</label>
      <input name="city"/>
    </div>
    )
  }
  const WelcomeStudent=()=>{
    console.log({})

  }
  const Submit=()=>{
    return(
      <div>
        <button onClick={WelcomePage}>Submit</button>
      </div>
    )
  }

  return (
    <div>
      <AddName/>
      <AddCity/>
      <Submit/>
    </div>
  )
}

export default App
