// 2 ways of string declaration

let str = "SSB";
let strNew = new String("Ayu");

// console.log(str);
// console.log(strNew);

// console.log(strNew[0]);
// console.log(strNew.__proto__);





// New way of Use
const username = "shiv";
const age = 15;
// console.log(`my name is ${username} & age is ${age}`);

// console.log( username.length );

// console.log( username.toUpperCase() );

// console.log( username.charAt(2) );

// console.log( username.indexOf('v') );









// trim --> starting and ending white space are remove.
let name2 = "          pk        ";
// console.log( name2.trim() );









let name1 = "shiv-ssb-dev-euu";


// take -ve value Not Allowed
// substring(start,end)
// console.log( name1.substring(0,6) );


// take -ve value Allowed
// console.log( name1.slice(0,8) );


// replace()
// only first match '-' will replace to '@'
const newName2 = name1.replace('-','@')
// console.log( newName2 );


// include()
// console.log( name1.includes('dev') );







// split
// separate and make array --> [ 'SSB', 'Shiv', 'PK', 'AYU' ]
const temp = "SSB-Shiv-PK-AYU";
// console.log( temp.split('-') );