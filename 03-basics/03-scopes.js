// ------------------------ Global & Local Scopes ---------------------------------

// global scope
var c = 400; 

// Local Scope a , b
if(true){
    let a = 100;
    const b = 200;

    c = 900;
}

// Error Occur
// console.log(a); 

// Error Occur
// console.log(b);

// Error Not Occur
// c is Global so value change to 900
// console.log(c);






// global scope a
let a = 400; 

// Local Scope a , b
if(true){
    let a = 100;
    const b = 200;

    // console.log("Local a = ", a);
    
}
// console.log("Global a = ", a);






// ------------------------ Nested Scopes ---------------------------------


function one(){
    const first = 1;

    function oneChild(){
        const second = 2;

        // Display
        // console.log( `first : ${first} & second : ${second}` );   
    }
    oneChild();

    // --> Error
    // console.log(second); 
}

// call
one();

// --> Error
// console.log(first); 






// 
if(true){
    const temp1 = "SSB";

    if(true){
        const temp2 = "Batman"

        // console.log(` temp1: ${temp1} & temp2: ${temp2} `);
    }
    // ---> Error
    // console.log(temp2);
}    
// ---> Error
// console.log(temp1);

















// ------------------------ Function Hosting ---------------------------------

/*

Function Hoisting ---> 
Function hoisting is a behavior in JavaScript where function declarations 
are moved (or "hoisted") to the top of their containing scope during 
compilation. This means you can call a function before it is defined in the code.

*/


/*
Example 1: Function Declaration --->

fun1(); // No Error

function fun1() {
    console.log("EUu");
}

Explanation:
In this case, fun1 is a function declaration. When you call fun1() before its definition, 
it works without any error because the function declaration is hoisted to the top.
 The entire function definition is available before the code runs.

*/


/*

Example 2: Function Expression --->

// fun2(); // Error: Cannot access 'fun2' before initialization
const fun2 = function() {
    console.log("EUu");
};


Explanation:
Here, fun2 is defined as a function expression using const.
The line fun2(); is commented out because it would throw an error if 
you try to call fun2() before it’s defined. Function expressions are not hoisted 
in the same way as function declarations. Only the variable fun2 is hoisted, 
but it is not initialized until the assignment occurs. Therefore, trying to 
call fun2() before its definition results in a ReferenceError.

*/


// NOt Error
fun1()
function fun1(){
    console.log("EUu");
}



//  Error --> Cannot access 'fun2' before initializati
// fun2()
const fun2 = function(){
    console.log("EUu");
}
