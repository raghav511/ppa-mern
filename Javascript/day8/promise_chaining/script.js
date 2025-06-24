const request = fetch("https://dummyjson.com/products");

// request
//     .then((response) => {
//         const pr2 = response.json();
//         pr2.then((data) => {
//             console.log(data);
//         }).catch((err) => {
//             alert(`Unable tp convert response to json: ${err.message}`);
//         });
//     })
//     .catch((err) => {
//         alert(`Error during fetching products: ${err.message}`);
//         console.log(`Error during fetching products: ${err.message}`, err);
//     });

// request
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });

// request
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("If there is any error in response.json()");
//     });

const rootElem = document.getElementById("root");
const loaderElem = document.getElementById("loader");

request
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log("If there is any error in fetch()", err);
    })
    .then((data) => {
        data.forEach((element) => {
            const newPara = document.createElement("p");
            newPara.innerText = element.title;
            rootElem.appendChild(newPara);
        });
    })
    .catch((err) => {
        console.log("If there is any error in response.json()", err);
    })
    .finally(() => {
        loaderElem.style.display = "none";
        console.log("DONE -- all settled!");
    });
