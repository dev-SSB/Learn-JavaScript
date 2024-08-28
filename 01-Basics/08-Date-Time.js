// ------------------------- Date -----------------------------------

let myDate = new Date();

// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());



// 
let myCreatedDate1 = new Date(2023,0,23);
// console.log( myCreatedDate1.toDateString() );


// 
let myCreatedDate2 = new Date(2023,0,23,5,3);
// console.log( myCreatedDate2.toLocaleString() );


// YY MM DD
let myCreatedDate3 = new Date("2023-01-14");
// console.log( myCreatedDate3.toLocaleString() );








// ------------------------- Time -----------------------------------



// Time in Milli Second
let myTimeStamp = Date.now();
// console.log( myTimeStamp );

// Time in Milli Second to Second
// console.log( Math.floor( Date.now()/1000 ) );



// Month Start from 0 
let myCreatedDate = new Date();
// console.log( myCreatedDate.getMonth() );
// console.log( myCreatedDate.getFullYear() );


// Customize format of toLocaleString()
// console.log(
//     myCreatedDate.toLocaleString( 'default' , {
//         weekday:"long"
//     } )
// );
