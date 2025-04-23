//   // "Object constructor"
//   //let user = new Object()

//   // "object literal" syntax
// // let user = {}

// // let user {
// //     key: value, // key: value pairs
// //     property-name,: value, // property name
// // } 

// // let user = {
// //     name: "john", // key name value john
// //     age: 30, // key age value 30

// // }
// // console.log(user)

// // // object.key = 123
// // // user.isStudent = true;
// // // console.log(user)

// // // remove properties
// // delete user.age
// // console.log(user)

// // // 2 notation styles for reference
// // // object.key
// // // object[multi-word key]
// // user["likes birds"] = true;
// // console.log(user)

// // let newUser = {};

// // // set new key
// // newUser["likes roblox"] = true

// // // get 
// // alert(newUser["likes roblox"])

// // // delete
// // delete newUser["likes roblox"]

// // console.log(newUser)

// // let fruit = prompt("which fruit u wanna buy?")

// // let bag = {
// //     [fruit]: 5,
// // }


// // alert(bag.apple)

// // let fruit = "apple";
// // let bag = {
// //     [fruit + "Computers"]: 5
// // }
// // console.log(bag)

// // function makeUser (name,age){
// //     return {
// //         name,
// //         age,
// //         //etc.
// //     }
// // }

// // let user = makeUser("John", 30)

// // console.log(user)

// // let student = {
// //     name: "count doku",
// //     age: 21,
// // }
// // alert("age" in student)
// // alert("gamer" in student)

// // check for variable data
// // let newstudent = {
// //     age : 35,

// // }
// // let key = "age";
// // alert(key in newstudent)

// // let user = {
// //     name: "karan",
// //     age: 29,
// //     isStudent: false,
// // }

// // console.log(user)

// // for (let key in user) {
// //     alert(key)
// // }


// // 1

// // let user = {

// // }


// // let user = {
// //     name: "juan dingleberry"
// // }

// // // objects are related data proteties

// // const steve = {
// //     // OBJECT STATES
// //     // THESE PROPERTIES DESCRIBE
// //     // THE STATE OF AN OBJECT
// //     // OR ITS CHARACTERISTICs
// //     firstName: "Steve",
// //     lastName: "Minecraft",
// //     age: 55,
// //     isEmployed: false,
// //     sayHello: function(){
// //         console.log("I AM STEGEVE")
// //     },
// //     action: function() {
// //         console.log("CHICEKN ")
// //     }
// // }

// // console.log(steve.lastName)
// // steve.sayHello()
// // steve.action()

// // const spongeBob = {
// //     firstName: "Sponebob",
// //     lastName: "trianglepants",
// //     age: 26,
// //     isEmployed: true,
// //     sayHello: function(){
// //         console.log("my names triangle plants awdhhfjffhfhf")
// //     },
// //     action: function() {
// //         console.log("I make crab patties")
// //     }

// // }

// // steve.sayHello()
// // spongeBob.sayHello()


// // let book = {
// //     title: "to kill an endangered species",
// //     author: "gordan ramsey",
// //     displayInfo: function() {
// //         console.log(`${this.title} by ${this.author}`)
// //     },
// // }


// // book.displayInfo();

// class Book {
//     constructor(title, author, genre){
//         this.title = title;
//         this.author = author;
//         this.genre = genre;
//     }
//     displayInfo(){
//         console.log(`${this.title} by ${this.author} - Genre ${this.genre}`)
//     }
// }


// let myBook = new Book("The goblin", "R F K", "Health and Sciences")
// myBook.displayInfo()

// let mysecondbook = new Book("SAND", "idk", "Desert")
// mysecondbook.displayInfo();

// console.log(typeof Book)

// // #property is a private property








// Scope global outside

// Non module share global variable over scripts


// function test() {
//     const b = 2
    
//     if (true) {
//         const c = 3;
//         console.log(b,c)
//     }
// }

// test()

// hoisting

// brings function to top if defined with function

// var hoists variable to undefined

// private variables

// method chaining

// calling one methos after another in one continous line of code

// no method

// let username = window.prompt("Enter username")

// // MEthod chaining

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()
// console.log(username)

// // callbacks 

// // function passed as an argument to another function

// // used to do async operations: reading file, network request, databases

// // "when u done call this next"


// hello(leave)



// function hello(callback) {
//     console.log("hello")
//     callback();
// }

// function wait() {
//     console.log("wait")
// }

// function leave(){
//     console.log("leave")
// }

// function goodbye() {
//     console.log(("goodbye"))
// }

// synchronus code: executies line by line code in sequential manner

// async : allows multiple operations and code to be performed without blocking executions flow. NEtwork requests, fetching data, callbacks, promises, await/asyn



// Callback hell

// callbacks nested in other callbacks, cold diffucult to read

// function task1(callback){
//     setTimeout(()=> {
//         console.log("task 1 done"), 2000
//     })
//     callback()
// }

// function task2(callback){
//     setTimeout(()=> {
//         console.log("task 2 done"), 2000
//         callback()
//     })
// }

// function task3(callback){
//     setTimeout(()=> {
//         console.log("task 3 done"), 2000
//         callback()
//     })
// }

// function task4(callback){
//     setTimeout(()=> {
//         console.log("task 4 done"), 2000
//         callback()
//     })
// }

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => console.log("all tasks completed"))
//         })
//     })
// })

// promise 

// an object that manages asyn operations
// wrap pobject around async code
//promises to return, pending -> resolved or rejected
// new Promise(resolve,reject) => async code

// do chores in order

// function walk() {

//     return new Promise((resolve, reject) => {
    
//         setTimeout(() => {
//             resolve("YOu walk el dog")
//         },1500)
//     })

// }

// function clean() {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve("You clean") 

//     }, 2500);
// })
// }

// function Trash() {

//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve("you trash")

//     }, 500);
//     })
// }

// walk().then(value => {console.log(value); return clean()})
//     .then(value => {console.log(value); return Trash()})
//     .then(value => {console.log(value); console.log("you finsihed all chore")})
//     .catch(error => {console.error(error) } )

// // Async and await

// // async = makes funcction return promise
// // await maes asyyn functiom wait for promise


// async function doChores() {
//     try{
//         const walkdog = await walk()
//         console.log(walkdog)
    
//         const cleankitchen = await clean()
//         console.log(cleankitchen)
    
//         const taketrash = await taketrash()
//         console.log(taketrash)
    
//         console.log("u finished")   
//     }
//     catch(error) {
//         console.error(error)
//     }
// }

// doChores()

// JSON data interchanging format

// JSON.stringity() makes js object into json string
// JSON.parse() = converts json string to js object

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"]
console.log(names)


const jsonStringNames = JSON.stringify(names)
console.log(jsonStringNames)

// JSON.stringify on an object

const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}

console.log(person)

const jsonStringPerson = JSON.stringify(person)
console.log(jsonStringPerson)

// JSON.stringify an array of objects

const bikiniBottom = [
    {
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true
    },
    {
        "name": "Patrick",
        "age": 34,
        "isEmployed": false
    },
    {
        "name": "Squidward",
        "age": 50,
        "isEmployed": true
    },
    {
        "name": "Sandy",
        "age": 27,
        "isEmployed": false
    }
]

console.log(bikiniBottom)

const jsonStringifyBikiniBottom = JSON.stringify(bikiniBottom)
console.log(jsonStringifyBikiniBottom)

// JSON.parse

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`
const jsonPerson = `{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}`

const jsonBikiniBottom = `[
    {
        "name": "Spongebob",
        "age": 30,
        "isEmployed": true
    },
    {
        "name": "Patrick",
        "age": 34,
        "isEmployed": false
    },
    {
        "name": "Squidward",
        "age": 50,
        "isEmployed": true
    },
    {
        "name": "Sandy",
        "age": 27,
        "isEmployed": false
    }
]`

console.log(jsonNames)
const parsedData = JSON.parse(jsonNames)
console.log(parsedData)

// fetch()
fetch("./person.json") // fetches the "person.json" file from local files.
    .then(response => response.json()) // converts the response to a JSON object
    .then(value => console.log(value)) // logs the pased json object to the console

    // iterate through an array of objects with fetch using forEAch
fetch("./bikini-bottom.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error))