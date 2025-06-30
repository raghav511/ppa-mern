// <React.Fragment></React.Fragment>
// <Fragment></Fragment>

import { useState } from "react";

// <></>
const App = () => {
    const [firstNumber, setFirstNumber] = useState(null);
    const [secondNumber, setSecondNumber] = useState(null);
    const [operator, setOperator] = useState(null);
    // enter first number
    // we tell the operator
    // enter the second number

    // 7
    // 5
    // 7*10 + 5
    // prev 75
    // 9
    // 75*10 + 9
    // 759

    const handleNumberClick = (e) => {
        const val = Number(e.target.innerText);

        if (operator === null) {
            setFirstNumber((prev) => {
                if (prev === null) {
                    return val;
                } else {
                    return prev * 10 + val;
                }
            });
        } else {
            setSecondNumber((prev) => {
                if (prev === null) {
                    return val;
                } else {
                    return prev * 10 + val;
                }
            });
        }
    };

    let ans = 0;
    if (firstNumber !== null && secondNumber !== null) {
        ans = firstNumber + secondNumber;
    }

    return (
        <>
            <div>
                <button onClick={handleNumberClick}>1</button>
                <button onClick={handleNumberClick}>2</button>
                <button onClick={handleNumberClick}>3</button>
                <button onClick={handleNumberClick}>4</button>
                <button onClick={handleNumberClick}>5</button>
                <button onClick={handleNumberClick}>6</button>
                <button onClick={handleNumberClick}>7</button>
                <button onClick={handleNumberClick}>8</button>
                <button onClick={handleNumberClick}>9</button>
                <button onClick={handleNumberClick}>0</button>
            </div>
            <div>
                <button
                    onClick={() => {
                        setOperator("+");
                    }}
                >
                    +
                </button>
            </div>
            <div>{firstNumber !== null ? <p>{firstNumber}</p> : null}</div>
            <div>{secondNumber !== null ? <p>{secondNumber}</p> : null}</div>
            <div>{ans}</div>
            {/* <div>
                {firstNumber !== null && secondNumber !== null ? (
                    <p>= {Number(firstNumber) + Number(secondNumber)}</p>
                ) : null}
            </div> */}
        </>
    );
};

export default App;
