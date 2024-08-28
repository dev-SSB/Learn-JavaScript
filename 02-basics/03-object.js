// ------------------------- object -----------------------------------

const jsUser = {
    name: "SSB",
    age: 22,
    location: "Nanded",
    email: "SSB@email.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon","Sat"]
};

// console.log( jsUser.age );
// console.log( jsUser["email"] );


// ------------------------- freeze() -----------------------------------

jsUser.email = "random-email";
// console.log(jsUser);


// Object.freeze( name )
Object.freeze(jsUser)
jsUser.email = "after freeze email change"
// console.log(jsUser);





// ---------- Interview QUestion Add Symbol in Object -------------

const mySymbol = Symbol("key1");

const user = {
    name:"user",
    [ mySymbol ] :"myKey 1",
    city:"pune",
    phone:1234567889
};
// console.log(user);





// --------------- function() in Object ------------------------

user.greeting = function() {
    console.log("Hello Guys");
};

user.greet = function() {
    console.log( `hello my name is ${this.name}` );
};


// console.log( user.greeting );
// console.log( user.greeting() );

// console.log( user.greet );
// console.log( user.greet() );


/* Output

[Function (anonymous)]
Hello Guys
undefined

[Function (anonymous)]
hello my name is user
undefined

*/



