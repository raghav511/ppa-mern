const title = document.getElementById("greetings");

const handleUsername = (e) => {
    const inputElem = e.target;
    const val = inputElem.value;

    title.innerHTML = `Hello <em>${val}</em>!`;
};

// when the form is submitted
// ** any button inside form by default works as a submit button

// default behavior of the form is to submit the information on the action page
const handleSubmit = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    // console.log("e:", e);
    const inputs = e.target;

    // const nameInput1 = inputs[0];
    // console.log("nameInput1", nameInput1.value);

    // const emailInput1 = inputs[1];
    // console.log("emailInput1", emailInput1.value);

    // const passwordInput1 = inputs[2];
    // console.log("passwordInput1", passwordInput1.value);

    const nameInput2 = inputs.username;
    console.log("nameInput2", nameInput2.value);

    const emailInput2 = inputs.email;
    console.log("emailInput2", emailInput2.value);

    const passwordInput2 = inputs.userPassword;
    console.log("passwordInput2", passwordInput2.value);

    if (passwordInput2.value.length < 8) {
        alert("Please use strong password");
        return;
    }

    const emailRegex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");

    if (!emailRegex.test(emailInput2.value)) {
        alert("Please use valid email");
        return;
    }

    window.open("./thankyou.html", "_self");
};
