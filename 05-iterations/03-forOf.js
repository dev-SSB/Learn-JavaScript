// ------------------------------------ For Of Loop ---------------------------------------
/*
for( let val of Name ){
    console.log(val);
}
*/



// ---- ForOf & Array ----
let arr1 = [1,2,3,4,5]

for(let item of arr1){
    // console.log(item);
};
// ---> 1 2 3 4 5 



// ---- ForOf & String ----
let str1 = "Hello SSB"

for(let char of str1){
    // console.log(char);   
}
// ---> H e l l o  S S B



// ---- ForOf & Object NOT WORKING ----
let obj1 = {
    game1: "NFS" ,
    game2: "GTA" ,
    game3: "PUBG"
}

for(let [key,value] of obj1){
    console.log(`key:- ${key} & Value:- ${value}`);
}
// ---> OBJ is not iterable
