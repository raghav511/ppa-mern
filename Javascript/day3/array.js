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