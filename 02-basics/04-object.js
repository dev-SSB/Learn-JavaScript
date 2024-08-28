// ------------------------- object -----------------------------------

let obj = new Object();
// console.log(obj)

obj.name = "SSB"
obj.age = 15
// console.log(obj)





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






// Object.assign()
// Combine all Data in one Object
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







// Spread Operator

const obj3 = {...o1,...o2,...o3}
// console.log(obj3);






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
console.log(Object.entries(obj4));

