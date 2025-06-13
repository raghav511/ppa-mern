const car = Object()
console.log(car)

const college = {
    "clgName": "abts",
    address: "hyd",
    clgName:'srs' //cascading works
}

console.log(college)

console.log(college.clgName)

console.log(typeof(college.address))
college['clgName']

const key = prompt("what key do you want to add?")

const value = prompt("what is its value?")

college[key]=value

console.log(college)

college["clgName"]="bhu"

console.log(college)

delete college["address"]

console.log(college)

//// --------------------------- 

// function inside a object


const brand = {
    model: "oppo",
    age:20,
    task: ()=>{
        console.log("make calls")
        console.log(this.age) // return undefine since arrow function
        // will this to parent of fn, and age is not define
    }
}

brand.task()

// ---------------------------
age = 21
const brand2 = {
    model: "lenovo",
    age:110,
    task: ()=>{
        console.log("make programs")
        console.log(this.age) // returns 21 for the same above mentioned reason
    }
}

brand2.task()

// ---------------------------
age = 21
const brand3 = {
    model: "lenovo",
    age:110,
    task: function (){
        console.log("make programs")
        console.log(this.age) // returns 100 since, 
        // function keyword points this to the current or same object
    }
}

brand3.task()



// -------- object inside a object

const book = {
    author:'av',
    info:{
        title:'spark',
        volume:2
    }
}

console.log(book.info.title)

// to get keys
for(let keys in book){
    console.log(keys)
}

const k = Object.keys(brand3)
console.log(k)

const v = Object.values(brand3)
console.log(v)

const kv = Object.entries(brand3)
console.log(kv)