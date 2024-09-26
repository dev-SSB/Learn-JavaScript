// -------------- Number coversion  ------------------- 


// "33" --> Number
let score = "33";
let strToNum = Number(score);
// ---> number
// console.log(typeof strToNum);
// ---> 33
// console.log(strToNum);

// "33abc" --> NAN
score = "33abc";
strToNum = Number(score);
// ---> number
// console.log(typeof strToNum);
// ---> NaN
// console.log(strToNum);

// null --> 0
score = null;
strToNum = Number(score);
// ---> number
// console.log(typeof strToNum);
// ---> 0
// console.log(strToNum);

// true --> 1
score = true;
strToNum = Number(score);
// ---> number
// console.log(typeof strToNum);
// ---> 1
// console.log(strToNum);


// false --> 0
score = false;
strToNum = Number(score);
// ---> number
// console.log(typeof strToNum);
// ---> 0
// console.log(strToNum);


// undefined --> NaN
score = undefined;
strToNum = Number(score);
// ---> number
// console.log(typeof strToNum);
// ---> NaN
// console.log(strToNum);


// "pp" --> NaN
score = "pp";
strToNum = Number(score);






// -------------- Boolean coversion  ------------------- 


// 1 --> true
score = 12;
numToBool = Boolean(score);
// ---> boolean
// console.log(typeof numToBool);
// ---> true
// console.log(numToBool);


// 0 --> false
score = 0;
numToBool = Boolean(score);
// ---> boolean
// console.log(typeof numToBool);
// ---> false
// console.log(numToBool);


// "SSB" --> true
score = "SSB";
numToBool = Boolean(score);
// ---> boolean
// console.log(typeof numToBool);
// ---> true
// console.log(numToBool);


// "" --> false
score = "";
numToBool = Boolean(score);
// ---> boolean
// console.log(typeof numToBool);
// ---> false
// console.log(numToBool);






// -------------- String coversion  ------------------- 


// "77"  --> 77 --> string
score = 77;
numToStr = String(score);
// ---> string
// console.log(typeof numToStr);
// ---> "77"
// console.log(numToStr);








// -------------- Confusion ------------------- 

// "1" + 2 = 12
// 2 + "1" = 21
// "1" + 3 + 3 = 133
// 3 + 3 + "5" = 65


// Increment & Decrement 
let num =5;
// ---> 5
// console.log( num++ );
// ---> 7
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
// ---> false
// console.log(1 === "1");

