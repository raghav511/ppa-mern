// let username = "Likhilesh";

// const hello = () => {
//     console.log("Hello", username);
// };

// setTimeout(hello, 5000);

// ---------------------------------------

// Higher order function : a function that accepts another function as parameter OR
//                         returns a function is called HoF.

const doSomething = () => {
    let count = 0;

    const incrementCount = () => {
        count++;
        console.log(count);
    };

    return incrementCount;
};

const resultFn = doSomething();

resultFn();
resultFn();
resultFn();
