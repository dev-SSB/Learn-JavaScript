// -------------- Number coversion  ------------------- 


// "33" --> Number
let score = "33";
let strToNum = Number(score);
// console.log(typeof strToNum);
// console.log(strToNum);

// "33abc" --> NAN
score = "33abc";
strToNum = Number(score);


// null --> 0
score = null;
strToNum = Number(score);


// true --> 1
score = true;
strToNum = Number(score);


// false --> 0
score = false;
strToNum = Number(score);


// undefined --> NaN
score = undefined;
strToNum = Number(score);


// "pp" --> NaN
score = "pp";
strToNum = Number(score);






// -------------- Boolean coversion  ------------------- 


// 1 --> true
score = 12;
strToNum = Boolean(score);
// console.log(typeof strToNum);
// console.log(strToNum);


// 0 --> false
score = 0;
strToNum = Boolean(score);


// "SSB" --> true
score = "SSB";
strToNum = Boolean(score);


// "" --> false
score = "";
strToNum = Boolean(score);






// -------------- String coversion  ------------------- 


// "77"  --> 77 --> string
score = "77";
strToNum = String(score);
// console.log(typeof score);
// console.log(score);








// -------------- Confusion ------------------- 

// "1" + 2 = 12
// 2 + "1" = 21
// "1" + 3 + 3 = 133
// 3 + 3 + "5" = 65


// Increment & Decrement 
let num =5;
// console.log( num++ );
// console.log( ++num );






// -------------- Comaparison of dataType ------------------- 

// "2" > 1 = true
// console.log("2" > 1);

// null > 0 --> false
// null == 0  --> false
// null >= 0  --> true

// undefined == 0 --> false
// undefined > 0 --> false


// strictly check
// value & dataType Check
// console.log(1 === "1");









// -------------------------   --------------------------------- 