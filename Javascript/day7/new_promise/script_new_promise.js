console.log("Start");

const pr = new Promise((res, rej) => {
    console.log("Inside Promise...");

    setTimeout(() => {
        console.log("Resolving...");

        res({
            name: "Likhilesh",
            city: "Delhi",
            userId: "001",
        });
    }, 20000);

    setTimeout(() => {
        console.log("Resolving...");

        rej("You are not admin! So cannot access profile.");
    }, 5000);
});

console.log("MID");

pr.then((data) => {
    console.log("Done", data);
}).catch((err) => {
    console.log("Error occurred", err);
});

console.log("END");
