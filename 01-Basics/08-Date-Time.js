// ------------------------- Date -----------------------------------

let myDate = new Date();

// console.log(myDate);
// 2024-10-17T13:43:47.790

// console.log(myDate.toString());
// Thu Oct 17 2024 19:15:00 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString());
// Thu Oct 17 2024

// console.log(myDate.toLocaleString());
// 17/10/2024, 7:18:05 pm


// 
let myCreatedDate1 = new Date(2023,0,23);
// console.log( myCreatedDate1.toDateString() );
// Mon Jan 23 2023

// 
let myCreatedDate2 = new Date(2023,0,23,5,3);
// console.log( myCreatedDate2.toLocaleString() );
// 23/1/2023, 5:03:00 am

// YY MM DD
let myCreatedDate3 = new Date("2023-01-14");
// console.log( myCreatedDate3.toLocaleString() );
// 14/1/2023, 5:30:00 am








// ------------------------- Time -----------------------------------



// Time in Milli Second
let myTimeStamp = Date.now();
// console.log( myTimeStamp );
// 1729173391915

// Time in Milli Second to Second
// console.log( Math.floor( Date.now()/1000 ) );
// 1729173407


// Month Start from 0 
let myCreatedDate = new Date();

// console.log( myCreatedDate.getMonth() );
// 9

// console.log( myCreatedDate.getFullYear() );
// 24


// Customize format of toLocaleString()
// console.log(
//     myCreatedDate.toLocaleString( 'default' , {
//         weekday:"long"
//     } )
// );
