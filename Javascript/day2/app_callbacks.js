// // callbacks
// // --> function which is called by the handler
// // callbacks --> help you to execute logic (*sync, async)

// const print = (txt) => {
//     console.log("-----------------");
//     console.log("👉🏼👉🏼", txt);
//     console.log("-----------------");
// };

// const add = (a, b) => {
//     const ans = a + b;
//     return ans;
// };

// const multiply = (a, b) => {
//     const ans = a * b;
//     return ans;
// };

// // ( 400 + 300 ) * 1.18

// const result = add(400, 300);
// const finalResult = multiply(result, 1.18);
// print(finalResult);

// ----------------------------------------

// "callback" is a function that is passed as an argument to another function
// "Higher order function" (HoF) is a function that
//      - accepts another function as a parameter

// -------------------------------------------------

// const print = (txt) => {
//     console.log("-----------------");
//     console.log("Please pay your bill:");
//     console.log("👉🏼👉🏼 Rs.", txt);
//     console.log("-----------------");
// };

// const ans = 10;

// const calculateBill = (a, b, cb) => {
//     const amount = a + b;
//     const res = cb(amount); // function invocation / calling
//     return res;
// };

// const multiply = (a, b) => {
//     const ans = a * b;
//     return ans;
// };

// const foodBill = (baseAmount) => {
//     const ans = multiply(baseAmount, 1.05);
//     return ans;
// };

// const drinksBill = (baseAmount) => {
//     const ans = multiply(baseAmount, 1.3);
//     return ans;
// };

// const bill1 = calculateBill(300, 400, foodBill);
// const bill2 = calculateBill(200, 500, drinksBill);
// calculateBill(bill1, bill2, print);
