// -------------------------- If Else --------------------------



// Comaparison Operator ---> <, >, <=, >=, ==, !=, ===, !==
// 2 == "2"  --> True
// 2 === "2" --> False



// 
const temp = 100
// if(temp>50){
//     console.log("Greater than 50");
// }
// else{
//     console.log("Less than 50");
// }
// Greater than 50



const score = 200
// if(score > 100){
//     const fly = "Fly"
//     console.log( `user power : ${fly}` )
// }
// console.log( `user power : ${fly}` )

/* OUTPUT
user power : Fly
P:\2024 JS\04-control-flow\01-if-elseIf-else.js:28
console.log( `user power : ${fly}` )
                             ^

ReferenceError: fly is not defined
*/



// 
const balance = 99;
// if(balance<100)
    // console.log("Run");
// Run




const userLoggedIn = true;
const debitCard = true;
const userLoggedFromGoogle = false;
const userLoggedFromEmail = true;

if(userLoggedIn && debitCard)
    console.log("Allow");
    
if(userLoggedFromEmail || userLoggedFromGoogle )
    console.log("User Logged In");
/*
Allow
User Logged In
*/