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
// 22

// console.log( jsUser["email"] );
// SSB@email.com


// ------------------------- freeze() -----------------------------------

jsUser.email = "random-email";
// console.log(jsUser);
/*
{
  name: 'SSB',
  age: 22,
  location: 'Nanded',
  email: 'random-email',
  isLoggedIn: false,
  lastLoginDays: [ 'Mon', 'Sat' ]
}
*/

// Object.freeze( name )
Object.freeze(jsUser)
jsUser.email = "after freeze email Not change"
// console.log(jsUser);
/*
{
  name: 'SSB',
  age: 22,
  location: 'Nanded',
  email: 'random-email',
  isLoggedIn: false,
  lastLoginDays: [ 'Mon', 'Sat' ]
}
*/





// ---------- Interview QUestion Add Symbol in Object -------------

const mySymbol = Symbol("key1");

const user = {
    name:"user",
    [ mySymbol ] :"myKey 1",
    city:"pune",
    phone:1234567889
};
// console.log(user);
/*
{
  name: 'user',
  city: 'pune',
  phone: 1234567889,
  [Symbol(key1)]: 'myKey 1'
}
*/





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



