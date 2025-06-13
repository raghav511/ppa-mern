const print = (txt) => {
    console.log("Printing...");
    console.log("👉👉👉👉",txt);
    return txt;
}

const calculateBill = (a,b,cb) => {
    const ans = a + b;
    return cb(ans);
}

const mul = (a,b) => {
    const ans = a * b;
    return ans;
}

const foodBill = (baseAmount) => {
    const ans = mul(baseAmount,1.05);
    return ans;
}

const shoppingBill = (baseAmount) => {
    const ans = mul(baseAmount,1.18);
    return ans;
}

// to understand cb
// const result = calculateBill(460, 330, foodBill);
// print(result);

const totalBill = calculateBill(calculateBill(300,400,foodBill),calculateBill(99,100,shoppingBill),print);
console.log("Total bill is",totalBill);
print(totalBill);
