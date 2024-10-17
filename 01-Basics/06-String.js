/*  2 ways of string declaration 
    1) String Literal : Create Primitive String And Directly Stored in Memory
    2) String Constructor : Create an Object That contain Primitive String Value and additional 
        Properties & Methods. 
*/

let str = "SSB";
let strNew = new String("Ayu");

// console.log(str);
// -- SSB --

// console.log(strNew);
// -- [String: 'Ayu'] --

// console.log(typeof strNew);
// -- object --

// console.log(strNew[0]);
// -- A --

// console.log(strNew.__proto__);
// -- {} --





// New way of Use
const username = "shiv";
const age = 15;

// console.log(`my name is ${username} & age is ${age}`);
// my name is shiv & age is 15

// console.log( username.length );
// 4

// console.log( username.toUpperCase() );
// SHIV

// console.log( username.charAt(2) );
// i

// console.log( username.indexOf('v') );
// 3








// trim --> starting and ending white space are remove.
let name2 = "          pk        ";
// console.log( name2.trim() );
// "pk"




let name1 = "shiv-ssb-dev-euu";


// take -ve value Not Allowed
// substring(start,end)
// console.log( name1.substring(0,6) );
// shiv-s

/*
take -ve & +ve value Allowed
It returns a new string and does not alter the original string.
Negative indices can be used to count from the end of the string

let str = "Hello, World!";
let sliced = str.slice(-6); // "World!"

*/
// console.log( name1.slice(0,8) );
// shiv-ssb


// replace()
// only first match '-' will replace to '@'
const newName2 = name1.replace('-','@')
// console.log( newName2 );
// shiv@ssb-dev-euu


// include()
console.log( name1.includes('dev') );
// true






// split
// separate and make array --> [ 'SSB', 'Shiv', 'PK', 'AYU' ]
const temp = "SSB-Shiv-PK-AYU";
console.log( temp.split('-') );