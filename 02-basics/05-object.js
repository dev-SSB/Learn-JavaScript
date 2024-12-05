
// ------------------------- object de-Structure -----------------------------------



const obj = {
    name:"SSB",
    age:90,
    email:"user@mail.com",
    city:"pune"
}

// console.log(obj.age)

// SSB
const { name } = obj;
console.log(name);

// user@mail.com
const {email : Gmail } = obj;
console.log(Gmail);






// ------------------------- JSON Format -----------------------------------

// JSON --> JavaScript Object Notation


/* JSON Format 

{
    "name": "SSB",
    age:90
}

*/



/* JSON Format 

[
    { },
    { },
    { }
]

*/

const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];

//  JSON Format  destructuring
const [user1, user2, user3] = users;

const { name: name1, age: age1 } = user1;
const { name: name2, age: age2 } = user2;
const { name: name3, age: age3 } = user3;

// console.log(name1, age1); 
// Output: Alice 25

// console.log(name2, age2); 
// Output: Bob 30

// console.log(name3, age3); 
// Output: Charlie 35


// const users = [
//     { id: 1, name: 'Alice', age: 25 },
//     { id: 2, name: 'Bob', age: 30 },
//     { id: 3, name: 'Charlie', age: 35 }
// ];

// const [{ id: id1, name: name1, age: age1 }, u2, u3] = users;

// console.log(id1, name1, age1); // Outputs: 1 Alice 25

