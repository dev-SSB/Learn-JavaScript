// ---------------------------- Function & Parameter ----------------------


// function defination
function sayHello( ){
    console.log("Hello");
};

// function reference
sayHello

// function execution
// sayHello();
// -- Hello --




// function with 2 parameter
function addTwoNumber( num1,num2 ){
    console.log(num1+num2);
}

// function take 2 argument
// addTwoNumber(2,4); // 6

// addTwoNumber(); // NaN
/* Since no arguments are passed, both num1 and num2 are undefined, 
    and adding them results in NaN (Not a Number).
*/

// addTwoNumber(2,"5"); // 25
/* JavaScript performs type coercion, treating the number 2 as a string, 
    resulting in string concatenation: "2" + "5" equals "25".
*/

// addTwoNumber(3,null); // 3
// Here, null is treated as 0, so the result is 3 + 0, which is 3.


// const r1 = addTwoNumber(5,9);
// console.log(r1);
// undefined




// 
function sum(n1,n2){
    return n1+n2;
}
let r2 = sum(4,6);
// console.log(`sum : ${r2}`);
// sum : 10





// 
function loginUser(username){
    return `${username} Logged In!!`;
};

// console.log( loginUser("SSB") );
// SSB Logged In!!

// console.log( loginUser() );
// undefined Logged In!!






// username === undefined  ----> ! username
function greet(username)
{
    if(! username){
        console.log("Enter User Name !!!");
        return
    }
    return `${username} Logged In!!`;

}

// console.log( greet() );
/*
Enter User Name !!!
undefined
*/

// console.log( greet("SSB") );
// SSB Logged In!!




// default parameter take

function greeting(username="SSB")
{
    if(! username){
        console.log("Enter User Name !!!");
        return
    }
    return `${username} Logged In!!`;

}
// console.log( greeting() );  // SSB Logged In!!
// console.log( greeting("Tushar") );  // Tushar Logged In!!


