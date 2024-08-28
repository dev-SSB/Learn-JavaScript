// ------------------------- Number -----------------------------------

// 2 ways of Number declaration

const num1 = 100;
const num2 = new Number(500);
// console.log(num1);
// console.log(num2);



// toString()
// console.log( num1.toString() );
// console.log(typeof num1.toString() );
// console.log(` Length = ${num1.toString().length} ` );




const newNum = 100.22334469;

// toFixed(2)
// console.log( newNum.toFixed(2) );

// toPrecision()
// console.log( newNum.toPrecision(4) );




// 
const hundreds = 1050000
// console.log( hundreds.toLocaleString('en-In') );








// ------------------------- Math -----------------------------------



// Math.abs()
// console.log( Math.abs(-3) );
// console.log( Math.abs(9) );



// Math.round()
// console.log( Math.round(4.3) );
// console.log( Math.round(4.6) );



// Math.ceil()
// console.log( Math.ceil(4.1) );
// console.log( Math.ceil(6.6) );



// Math.floor()
// console.log( Math.floor(4.1) );
// console.log( Math.floor(6.6) );








// ------------------------- Math.random() -----------------------------------

// 0 to 1 any value come
// console.log( Math.random() );


// 0 to 10 any value come
// console.log( (Math.random() * 10) + 1 );


// floor() Exact 0 to 10 any value comes
// console.log( Math.floor(Math.random() * 10) + 1 );



// 10 to 20 Random values come 
const min = 10;
const max = 20;

console.log( Math.floor( Math.random() * (max-min+1) ) + min );

