const userId = 5000;
let userName = "dev-SSB";
var userPass = "SSB";

// print
console.log(userId);

// Not Allowed because it is constant
// userId = 1000;

// Allowed
userName = "Shiv";
userPass = "pass";

// print data in table
console.table([userId,userName,userPass]);

// var give scope problem so not used

// Allowed but Not use
userCity = "Nanded";
console.log(userCity);