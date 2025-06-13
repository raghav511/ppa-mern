console.log(window);

console.log(window.location)

// window.close();



console.log(window.document.getElementById("body"));

console.log(window.document.body);

const printName = () => {
    console.log("Raghavendra");
}

// setTimeout(printName, 1000);


const intervalId =setInterval(printName, 1000);

console.log(intervalId)

const stopName = () =>{
    clearInterval(intervalId)
}

setTimeout(stopName,5000);

// setTimeout(()=>{clearInterval(intervalId)},5000); this also works


