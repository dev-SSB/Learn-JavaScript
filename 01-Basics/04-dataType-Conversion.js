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
console.log(typeof score);
console.log(score);
