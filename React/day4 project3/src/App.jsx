import { useState } from "react";

// A component where you have two inputs to type your name and city,
// and one button to click.
// When the user types his name and city, and then clicks on the button,
// then he should see his name and city on screen.

function App() {
  const [studentName, setStudentName] = useState("");
  const [studentCity, setStudentCity] = useState("");
  const [isSubmit, setSubmit] = useState(false);

  const CaptureName = (e) => {
    setStudentName(e.target.value);
    setSubmit(false);
  };

  const CaptureCity = (e) => {
    setStudentCity(e.target.value);
    setSubmit(false);
  };

  const SubmitForm = () => {
    setSubmit(true);
  };

  return (
    <div>
      <label htmlFor="studentName">Student Name</label>
      <input
        type="text"
        name="studentName"
        id="studentName"
        value={studentName}
        onChange={CaptureName}
      />
      <br />
      <br />
      <label htmlFor="studentCity">Student City</label>
      <input
        type="text"
        name="studentCity"
        id="studentCity"
        value={studentCity}
        onChange={CaptureCity}
      />
      <br />
      <br />
      <button onClick={SubmitForm}>Submit</button>
      {isSubmit && (
        <h2>
          Hello {studentName}, Welcome to {studentCity}
        </h2>
      )}
    </div>
  );
}

export default App;

// how to enable Enter keyboard stroke for Submit
