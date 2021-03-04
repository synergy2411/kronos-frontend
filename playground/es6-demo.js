// Vanilla JavaScript - Object based scripting language

// 2015 - nextGen JS - ES6 - ECMAScript6 - Object Oriented

// •	Arrow functions -Lambda exp () => {}
// - great for one-liners function
// - two flavours : 1. with paranthesis 2. without paranthesis
// - Don't have 'this' keyword
// - can't be called by 'new' keyword
// - don't have 'arguments' keyword

// - 'this' refers to current object
// - 'this' refers to caller object 

// var lastName = "Bar";
// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         // return this.firstName + " " + this.lastName;
//         // console.log(firstName);
//         var firstName = "foo";
//         var that = this;
//         // var firstName = "Foo";
//         return function(){
//             console.log(firstName);     // Closure stuff
//             return that.firstName + " " + that.lastName;        
//         }
//     }
// }
// var innerFunc = user.getFullName();
// console.log(innerFunc());           //?


// var user = {
//     email: "test@test.com",
//     age: 32,
//     getDetails: () => {
//         // this
//         return () => {
//             return "Hi " + this.email + ", I am " + this.age + " years old";
//         }
//     }
// }

// var innerFunc = user.getDetails();

// console.log(innerFunc());














// var numbers = [1,2,3,4,5];
// // Vanilla JS

// var doubleValue = numbers.map(function(value){
//     return value * 2;
// })

// // Arrow Function
// // var tripleValue = numbers.map(value => value * 2 )
// var tripleValue = numbers.map((value, index) => {
//     console.log("Index : ", index);
//     return value * 2;
// } )

// console.log(doubleValue);












// •	Destructuring - objects - {} / Arrays = []

// var friends = ["Foo", "Bar","Bam", "Baz"];

// var [arr1, arr2, arr3, arr4] = friends;

// friends[1] = "XYZ";

// console.log(arr2);


// var user = {
//     firstName: "Foo",
//     lastName: "Bar",
//     address: {
//         city: "Delhi",
//         street: "201, Main road"
//     },
//     friends: ["Foo", "Bar", "Bam"]
// }

// var { firstName, address: { street }, friends: [, arr1] } = user;

// console.log(firstName, street, arr1);


// var users = [
//     {
//         email: "test@test.com",
//         age: 32
//     }, {
//         email: "bac@test.com",
//         age: 34
//     }, {
//         email: "xyz@test.com",
//         age: 36
//     }
// ]
// var [{ email : e1, age }, { email : e2, age }, { email : e3, age }] = users;

// console.log(e2);     // ?














// •	Rest/Spread Operators - ( ... )
//  - Rest : creates the collection from individual item
//  - Spread : splits the collection into individual items

// function display(email, ...args){
//     console.log(args[0]);           // ?
//     console.log(isAdmin);
// }

// display("test@test.com");
// display("test@test.com", 32);
// display("test@test.com", 32, true);

// var coll = [3, 4, 5];

// var newColl = [1, 2, ...coll, 6, 7]    // ? newColl = [1,2,3,4,5,6,7]

// var secondColl = [1, 2, coll, 6, 7]    // ? secondColl = [1,2,[3,4,5],6,7]

// console.log(newColl, secondColl);














// •	Maps & Sets

// var map = new Map();
// map.set("name", "Foo");
// map.set(1, "One");
// map.set(true, "Boolean");

// console.log(map.get(1));

// for(let key of map.keys()){
//     console.log(key)
// }
// for(let value of map.values()){
//     console.log(value)
// }
// for(let data of map){
//     console.log(data);
// }

// var arr = [1,2,3,1,3,4,2]

// var set = new Set(arr);
// for(let data of set){
//     console.log(data);
// }













// •	Template Literals = "" / '' / ``
//  - embed the variables within strings
//  - multiline strings without (+) operator

// var fname = "Foo";
// var age = 32;

// var str = `Hello ${fname}, 
// I am ${age} years old!`;

// console.log(str);













// •	Block Scoping - restrict the scope of variable to the nearest curly braces
//  - let - other types
//  - const - constant variable

// function display(arr) {
//     if (arr.length > 2) {
//         let LOAD = "LOADING...";
//         console.log(FLASH);         // undefined
//     } else {
//         // console.log(FLASH)
//         let FLASH = "FLASHING..."
//     }
// }
// display([1, 2, 3, 4])


// const USERNAME = "Foo";

// console.log(USERNAME);


// const USER = {
//     fname : "Foo"
// }

// // USER.fname = "Bar";

// USER = {
//     fname : "Bar"
// }

// console.log(USER);      // "Bar"




// JS Engine - 
//  1. Creation Phase - memory allocated to all variables and functions
    // - assign them special value called 'undefined'
//  2. Execution Phase












// •	Object.assign() - return new Object including all the unique properties

// let animal = {eats : true}
// let rabbit = {jumps : true}
// rabbit.__proto__ = animal;

// let bunny = Object.assign({}, rabbit, animal);

// console.log(bunny.jumps);
// console.log(bunny.eats);

// let newObj = Object.assign(
//     {lname : "Bar"}, 
//     {email : "test@test.com", age : 32},
//     {fname : "Foo", age : 30},
//     {age : 50}
//     );

// console.log(newObj);

















// •	Optional Parameter

// var user = {};
// console.log(user?.address?.city);     // ?






// •	Classes & Modules

import { Student, MAGIC_NUMBER } from './student';

let foo = new Student("test@test.com", 32);
console.log(foo.getDetail());
console.log("Magic Number- ", MAGIC_NUMBER);



// Webpack

// > npm install webpack webpack-cli webpack-dev-server --save-dev