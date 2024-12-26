// ------------------------- object -----------------------------------
// Creating an object using new Object()
const person = new Object();

// console.log(person);
/* OUTPUT

{   }

*/

// Adding properties
person.name = 'Alice';
person.age = 30;

// Adding a method
person.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Accessing properties and methods
// console.log(person.name); 
// Output: Alice

// console.log(person.age);
// Output: 30

// person.greet();           
// Output: Hello, my name is Alice and I am 30 years old.

// console.log(person); 
// { name: 'Alice', age: 30, greet: [Function (anonymous)] }









let obj = new Object();
// console.log(obj)
// {}

obj.name = "SSB"
obj.age = 15
// console.log(obj)
// { name: 'SSB', age: 15 }








let obj1 = {
    email:"some@gmail.com",
    userdetail :{
        userFullName:{
            fName:"shiv",
            lName:"bodke"
        }
    }
};
// console.log(obj1.userdetail.userFullName.fName)
// shiv







// Object.assign()
// The Object.assign() static method copies all properties from one or more source objects 
// to a target object. It returns the modified target object.
const o1 = {
    1:"a",
    2:"b"
}
const o2 = {
    3:"a",
    4:"b"
}
const o3 = {
    5:"a",
    6:"b"
}

// Object.assign( target, source )
const obj2 = Object.assign({},o1,o2,o3);
// console.log(obj2);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }






// Spread Operator

const obj3 = {...o1,...o2,...o3}
// console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }





// DataBase data Present in 
const data = [
    { },
    { },
    { }
]




// 
const obj4 = {
    name:"Ayu",
    age:78,
    email:"AYu@gmail.com"
}

// Object.keys() --> [ 'name', 'age', 'email' ]
// console.log( Object.keys(obj4) );

// Object.values() --> [ 'Ayu', 78, 'AYu@gmail.com' ]
// console.log(Object.values(obj4));

// Object.entries() --> [ [ 'name', 'Ayu' ], [ 'age', 78 ], [ 'email', 'AYu@gmail.com' ] ]
// console.log(Object.entries(obj4));

