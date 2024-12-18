// --------------  OOP  ---------------------------




// JS & Classes
/*
JS is protoTypes Language and its classes are primarily syntactic sugar over existing
prototype based inheritance mechanism.
*/




// Parts of OOP
/*
Object Literal
Constructor Function
classes
Instance(new,this)

4 Pillars:
    Abstraction
    Encapsulation
    Inheritance
    PolyMorphism
*/








// Object Literal
/*
Object is collection of properties and methods.

this means current context
    In core JS this Return { }
    In Browser this return window 
*/

const user = {
    userName:"SSB",
    age:12,
    signedIn:true,

    // method
    getUserDetails: function(){
        console.log("user DataBase");
        console.log(`userName: ${this.userName}`);
        console.log(this);
        /* --->
            {
                userName: 'SSB',
                age: 12,
                signedIn: true,
                getUserDetails: [Function: getUserDetails]
            }
        */
    }
};

// console.log( user.age );
// console.log( user.getUserDetails() );

// ---> return object : { }
// console.log(this);
// console.log(typeof this);












// Constructor Function
/*
New Keyword:
    When we use New Keyword an empty object is created.
    That is called is Instance.
    It create New Context called as Constructor Function.

    Ex.
    const promise1 = new Promise();
    const date = new Date();
*/


function User(userName,loginCount,isLoggedIn) {
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    
    this.greeting = function(){
        console.log(`Hello ${userName}`);
    }
    
    return this;
};

const user1 = new User('SSB',100,true);
const user2 = new User('Ayu',400,false);


console.log(user1);
// --->
/*
User {
  userName: 'SSB',
  loginCount: 100,
  isLoggedIn: true,
  greeting: [Function (anonymous)]
}
*/


console.log(user2);
// --->
/*
User {
  userName: 'Ayu',
  loginCount: 400,
  isLoggedIn: false,
  greeting: [Function (anonymous)]
}
*/