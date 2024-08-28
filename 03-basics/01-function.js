// ---------------------------- Function & Parameter ----------------------


// function defination
function sayHello( ){
    console.log("Hello");
};
// function reference
sayHello
// function execution
// sayHello();





// function with 2 parameter
function addTwoNumber( num1,num2 ){
    console.log(num1+num2);
}

// function take 2 argument
// addTwoNumber(2,4); // 6
// addTwoNumber(); // NaN
// addTwoNumber(2,"5"); // 25
// addTwoNumber(3,null); // 3

// 
// const r1 = addTwoNumber(5,9);
// console.log(r1);





// 
function sum(n1,n2){
    return n1+n2;
}
let r2 = sum(4,6);
// console.log(`sum : ${r2}`);






// 
function loginUser(username){
    return `${username} Logged In!!`;
};

// console.log( loginUser("SSB") );
// console.log( loginUser() );






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
// console.log( greet("SSB") );





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


