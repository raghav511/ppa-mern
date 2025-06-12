// const obj = {
//     name: "Likhilesh",
//     city: "Delhi",
//     country: "India",
// };

// console.log(obj);

// console.log(window);

// console.log(document);

let callback1 = function () {
    console.info("---- timeout -----");
    console.info("--->", "Likhilesh");
    console.info("---------");
};

let callback2 = function () {
    console.info("---- interval -----");
    console.info("--->", "Himanshu");
    console.info("---------");
};

const timeInMilliseconds = 5000;

setTimeout(callback1, timeInMilliseconds);
setInterval(callback2, 10000);
