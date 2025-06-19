/*  ------------------ CALLBACK ----------------

    -------------- Team A ------------
    const sendPayment = (paymentMethod, userAccount) =>{
        // ................
        // ................
        // ................
    }

    -------------- Team B ------------
    const processCheckout = (userId, cb) =>{
        // ................
        // useDetails = ((ask user details))
        // ................
        // userAccountDetails = payment details
        // ................

        if(...){
            cb(useDetails, userAccountDetails);
        }else if(...){
            cb(useDetails, userAccountDetails);
        }

        cb(useDetails, userAccountDetails);
    }
    
    -------------- Manager ------------
    const details = processCheckout(userId, sendPayment); // Inversion of Control

*/

/*  ----------------- PROMISES -----------------

    -------------- Team A ------------
    const sendPayment = (paymentMethod, userAccount) =>{
        // ................
        // ................
        // ................
    }

    -------------- Team B ------------
    const processCheckout = (userId) =>{
        // returns me a promises --> if will be settled after sometime

        // ................
        // useDetails = ((ask user details))
        // ................
        // userAccountDetails = payment details
        // ................

        if(...){
            cb(useDetails, userAccountDetails);
        }else if(...){
            cb(useDetails, userAccountDetails);
        }

        cb(useDetails, userAccountDetails);
    }
    
    -------------- Manager ------------
    const pr = processCheckout(userId);
    // pr.then --> sendPayment(details)
    // pr.catch --> showErrorMessage(details)

*/

// ----------- get data from internet ------------
// -------------- REST APIs --------------
// URL, http method --> xml / *JSON

const successCallbackFunction = (data) => {
    const time1 = new Date();

    console.log("✅ Success", time1.getMilliseconds(), data);

    const pr2 = data.json();

    pr2.then((finalData) => {
        const time2 = new Date();
        console.log("final data", time2.getMilliseconds(), finalData);
    });
};

const failureCallbackFunction = (err) => {
    console.log("X Error", err);
    alert(err.message);
};

const pr = fetch("https://dummyjson.com/todos");

console.log(pr);

pr.then(successCallbackFunction).catch(failureCallbackFunction);
