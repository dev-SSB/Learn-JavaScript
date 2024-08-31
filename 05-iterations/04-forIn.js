// ------------------------------------ For In Loop ---------------------------------------
/*
for( let val in Name ){
    console.log(val);
}
*/

// Index = 0 1 2 3 ...
// Value = Name[Index]




/*

Object { key1:value, 
    Key2:value
}
Index = key1 key2
Value = Object[Index]

*/





// ---- ForIn & Array ----
let arr1 = ['js','c','c++','python']

for(let key in arr1){
    // console.log(`key:- ${key} & Value:- ${ arr1[key] }`);
};
// --->
/*

key:- 0 & Value:- js
key:- 1 & Value:- c
key:- 2 & Value:- c++
key:- 3 & Value:- python

*/





// ---- ForIn & String ----
let str1 = "Hello SSB"

for(let index in str1){
    console.log(` Index: ${index} & Value: ${ str1[index] }`);   
}
// ---> 
/*

 Index: 0 & Value: H
 Index: 1 & Value: e
 Index: 2 & Value: l
 Index: 3 & Value: l
 Index: 4 & Value: o
 Index: 5 & Value:
 Index: 6 & Value: S
 Index: 7 & Value: S
 Index: 8 & Value: B

 */





// ---- ForIn & Object ----
let obj1 = {
    game1: "NFS" ,
    game2: "GTA" ,
    game3: "PUBG"
}

for(let key in obj1){
    // console.log(`key:- ${key} & Value:- ${ obj1[key] }`);
}
// ---> 
/*

key:- game1 & Value:- NFS
key:- game2 & Value:- GTA
key:- game3 & Value:- PUBG

*/
