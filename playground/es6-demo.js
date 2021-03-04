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


var user = {
    firstName: "Foo",
    lastName: "Bar",
    address: {
        city: "Delhi",
        street: "201, Main road"
    },
    friends: ["Foo", "Bar", "Bam"]
}

var { firstName, address: { street }, friends: [, arr1] } = user;

console.log(firstName, street, arr1);


var users = [
    {
        email: "test@test.com",
        age: 32
    }, {
        email: "bac@test.com",
        age: 34
    }, {
        email: "xyz@test.com",
        age: 36
    }
]
var [{ email, age }, { email, age }, { email, age }] = users;

console.log(email);     // ?













// •	Rest/Spread Operators
// •	Maps & Sets
// •	Classes & Modules
// •	Template Literals
// •	Block Scoping
// •	Object.assign()
// •	Optional Parameter