// -------------------- nullish coalescing operator ----------------------------
// ??
// Null Undefined


let val; 
val = null ?? 10
val = undefined ?? 10

console.log(val);




/*
The nullish coalescing operator (??) in JavaScript is a logical operator that allows you to provide a default value when dealing with null or undefined. It is particularly useful for setting default values without overriding other falsy values (like 0, false, or "").

How It Works
If value1 is null or undefined, the expression evaluates to value2.
If value1 is any other value (including 0, false, or ""), the expression evaluates to value1



Example1
let username = null;
let defaultUsername = "Guest";
let currentUsername = username ?? defaultUsername;
console.log(currentUsername); // Output: Guest

In this case, since username is null, currentUsername takes the value of defaultUsername.


Example2
let score = 0;
let defaultScore = 50;
let finalScore = score ?? defaultScore;
console.log(finalScore); // Output: 0

In this example, even though score is a falsy value (0), it is not null or undefined, so finalScore takes the value of score.
*/





 



