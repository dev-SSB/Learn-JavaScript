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
