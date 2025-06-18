setTimeout(() => {
    console.log("E. Timeout Done");
}, 0);

console.log("A. START");

const pr = new Promise((res, rej) => {
    console.log("B. Inside promise...");

    const pr2 = new Promise((ress) => {
        ress("Done Again!");
    });

    pr2.then((data) => {
        console.log("Insider promise done:", data);
    });

    res("Done");
});

console.log("D. Mid1");

console.log("F. Mid2");

pr.then((data) => {
    console.log("G. Promise completed", data);
});

console.log("H. END");
