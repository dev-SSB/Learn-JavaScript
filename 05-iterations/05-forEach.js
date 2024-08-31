// -------------------------- For Each Loop ----------------------------------
/*
ARRAY = [  --------- ]

ARRAY.forEach ( ----- ){
    --------
} 
*/

// For Each Always return undefined




// --- ForEach & Array ----
 
let arr1 = ["js","Cpp","Java","Python"];



// 
arr1.forEach( function (item) {
    // console.log(item);
    
})
// js Cpp Java Python




// 
arr1.forEach( (item) => {
    // console.log(item);
    
})
// js Cpp Java Python




// 
function printMe(item){
    console.log(item);
}

// arr1.forEach( printMe );
// js Cpp Java Python









// --- ForEach & Array contain OBJECT ----

const arrInObj = [
    { Name:"SSB", Age:15 },
    { Name:"Ayu", Age:22 },
    { Name:"ABhi", Age:75 },
    { Name:"SUraj", Age:35 }
];

arrInObj.forEach ( (item) => {
    console.log( item.Name, item.Age );
})
// --->
/*

SSB 15
Ayu 22
ABhi 75
SUraj 35

*/