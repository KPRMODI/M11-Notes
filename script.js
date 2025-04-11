  // "Object constructor"
  //let user = new Object()

  // "object literal" syntax
// let user = {}

// let user {
//     key: value, // key: value pairs
//     property-name,: value, // property name
// } 

// let user = {
//     name: "john", // key name value john
//     age: 30, // key age value 30

// }
// console.log(user)

// // object.key = 123
// // user.isStudent = true;
// // console.log(user)

// // remove properties
// delete user.age
// console.log(user)

// // 2 notation styles for reference
// // object.key
// // object[multi-word key]
// user["likes birds"] = true;
// console.log(user)

// let newUser = {};

// // set new key
// newUser["likes roblox"] = true

// // get 
// alert(newUser["likes roblox"])

// // delete
// delete newUser["likes roblox"]

// console.log(newUser)

// let fruit = prompt("which fruit u wanna buy?")

// let bag = {
//     [fruit]: 5,
// }


// alert(bag.apple)

// let fruit = "apple";
// let bag = {
//     [fruit + "Computers"]: 5
// }
// console.log(bag)

// function makeUser (name,age){
//     return {
//         name,
//         age,
//         //etc.
//     }
// }

// let user = makeUser("John", 30)

// console.log(user)

// let student = {
//     name: "count doku",
//     age: 21,
// }
// alert("age" in student)
// alert("gamer" in student)

// check for variable data
let newstudent = {
    age : 35,

}
let key = "age";
alert(key in newstudent)

let user = {
    name: "karan",
    age: 29,
    isStudent: false,
}

console.log(user)

for (let key in user) {
    alert(key)
}