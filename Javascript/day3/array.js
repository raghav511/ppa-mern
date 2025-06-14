const states = ["TS","Goa", "MH"]

console.log(states)

states.forEach((value,index,states)=>{
    console.log(index, value)
})

// ----

const pet1 = {
    petName: "malto",
    age:.5,
    color:"caramel"
}

const pet2 = {
    petName: "chinni",
    age:3,
    color:"white"
}

const pet3 = {
    petName: "chintu",
    age: 10,
    color: "brown"
}

const pets = [pet1, pet2, pet3]

console.log(pets)

// ---- creation of array
// 1.
const fruits = Array(["banana", "mango"])
console.log(fruits)

// 2.
const vegetables = ["carrot", "potato", "spinach", "capsicum"]
console.log(vegetables)

console.log(typeof vegetables) // object

// to check if it is really array or object
console.log(Array.isArray(vegetables)) // true
console.log(Array.isArray(pet1)) // false


// Accessing array , we need position to access, i.e, in array position matters
// position itself is like key in array
console.log(pets[0])

vegetables.forEach((vegetable)=>{
    console.log(vegetable)
})

// adding a new value
// 1. never use
// const newVeg = prompt('add vegetable to list');
// vegetables[2]=newVeg // never use this, never use [] to add new values
// console.log(vegetables)
// 2. using push
vegetables.push('onion')
console.log(vegetables)

// update a value , index should be less than len of array
vegetables[0]="mirchi"
console.log(vegetables)


// deleting elements from array

delete vegetables[0] // not recommeneded, deletes but empty spaces are there
console.log(vegetables)

vegetables.pop() //deleted from the end
console.log(vegetables)

vegetables.unshift("bittergourd") // add at the start
console.log(vegetables)

vegetables.shift()
console.log(vegetables)

vegetables.splice(1,2)
console.log("new veg list is", vegetables)

vegetables.splice(0,0, 'cabbage','tomato')
console.log("veg list", vegetables)

//  practise from w3

const fruitsW3 = ["Banana", "Orange", "Apple", "Mango"];
console.log("before toString", fruitsW3)
let myList = fruitsW3.toString(); 
console.log(myList) // Banana,Orange,Apple,Mango

console.log("before toString", pet1)
let myPet = pet1.toString();
console.log("after toString", myPet)

console.log(fruitsW3.at(-2))

console.log(fruitsW3.join("-")) // Banana-Orange-Apple-Mango

console.log(fruitsW3.concat(vegetables))
// Note
// The concat() method does not change the existing arrays.
// It always returns a new array.
// The concat() method can take any number of array arguments.

console.log(fruitsW3)


const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)

newArr.flatMap((value)=>{
    console.log(value*10)
})

myArr.map((value)=>{
    console.log(value*100)
})


const car1 = {
    brand: "BMW",
    model: "X5",
    color: "black",
    price: 100000
}

// for (let key in car1){
//     console.log("key is", key, "value is", car1[key])
// } never use this way, because of prototype chain

const keyValues = Object.entries(car1)
console.log("key values are:",keyValues)

for (let i = 0; i<keyValues.length; i++){
    console.log("keys are:",keyValues[i][0], "values are:",keyValues[i][1])
}


// for (let i of car1){
//     console.log("checking",i) wont work
// }

for (let i of keyValues){
    console.log('values are',i)
}

const car2 = {
    brand: "Audi",
    model: "A4",
    color: "white",
    price: 80000
}

const car3 = {
    brand: "Mercedes",
    model: "C-Class",
    color: "red",
    price: 120000
}

const car4 = {
    brand: "Mercedes",
    model: "C-Class",
    color: "red",
    price: 120000
}

keyValuePair = Object.entries(car4)

for (let values of keyValuePair){
    console.log("car4 data is:",values)
}

// 183 - 187 is the preferred way to access object values



//----
// array of objects
const cars = [car1, car2, car3]
console.log(cars)

// array inside object

const avy = {
    location: "goa",
    profession: "doctor",
    hobbies: ["poetry", "reading"], // array inside object
    marks:{
        "english": 30,
        "math": 50
    }
}

