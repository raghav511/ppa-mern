import { useState } from 'react';


// A component where you have two inputs to type your name and city, 
// and one button to click. 
// When the user types his name and city, and then clicks on the button, 
// then he should see his name and city on screen.

function App() {
  // const studentName, setStudentName = useState("");

  const NameCityInput=()=>{
    return(
    <div>
        <label htmlFor="studentName">Student Name</label>
        <input type="text" name="studentName" id="studentName"/>
        <br/>
        <br/>
        <label htmlFor='studentCity'>Student City</label>
        <input type="text" name="studentCity" id="studentCity"/>
        <br/>
        <br/>
        {/* <button onClick={}>Submit</button> */}
      </div>
    )
  }

  return (
    <div>
      <NameCityInput/>
      {/* <Submit/> */}
    </div>
  )
}

export default App
