// Scope Chaining

// var x = 100;            // Global Scope

// function display(){         // Outer Function Scope
//     // var x = 200;
//     function innerFunc(){       // Inner function Scope
//         // var x = 300;
//         console.log(x);         // 300
//     }
//     return innerFunc;
// }

// var innerFunc = display();

// innerFunc();

// Browser Env - Client-side JS
// Node Env - Server Side JS

// Lexical Environment / Scope

// var x = 200;

// // function b(){
// //     console.log(x);         // ?
// // }

// function a(){
//     var x= 100;
//     function b(){
//         console.log(x);         // ?
//     }
//     b();
// }

// a();

// Closure - binds the inner function with outer scope variable

// function testClosure(){
//     var x =  4;
//     return function(){
//         return ++x;
//     }
// }

// var innerFunc = testClosure();

// console.log(innerFunc());       // x = 5
// console.log(innerFunc());       // x = 6



// function buildTicket(transport){
//     var numOfPass = 0;
//     return function(name){
//         return "Hello " + name + "\nYou are goung via " + 
//             transport +"\nYou Ticket ID #" + (++numOfPass)
//     }
// }

// var ship  = buildTicket("Ship");

// console.log(ship("Foo"));       // ?
// console.log(ship("Bar"));       // ?

// var car = buildTicket("Car");
// console.log(car("Bam"));        // ?



// Prototype - implements inheritence in JS - __proto__

// var person = {
//     walk : true,
//     eat : function(){
//         return "Eating...";
//     }
// }

// var student = {
//     read : true
// }

// var student.__proto__ = person;

// console.log(student.walk);
// console.log(student.eat());


// var Shoe = {
//     size : 8
// }

// var magicShoe = Object.create(Shoe);

// magicShoe.gender = "Man";
// magicShoe.size = 10;


// console.log(magicShoe.size);            // ?
// console.log(magicShoe);

// console.log(Shoe.isPrototypeOf(magicShoe));
// console.log(magicShoe.isPrototypeOf(Shoe));

// var slipper = Object.create(magicShoe);
// console.log(slipper.size);
// console.log(slipper);
// console.log(magicShoe.isPrototypeOf(slipper));      // ?
// console.log(Shoe.isPrototypeOf(slipper));           // ?


// Constructor Function

