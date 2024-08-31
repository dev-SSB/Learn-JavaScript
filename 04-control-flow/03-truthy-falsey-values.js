// ---------------------------- Falsy Values ----------------------------

// false, 0, -0, 0n (BigInt), "", null, undefined, NaN


// ---------------------------- Truthy Values ----------------------------

// "0", "false", " ", [], {}, function(){}





// Array Check Empty --> arr.length
const arr = [ ]

if(arr.length === 0)
    console.log("Empty Array");
else
    console.log("NoN Empty Array");





// Object Empty Check --> Object.keys(obj).length
const obj = {
    name:"SSB",
    Age:18
}

if( Object.keys(obj).length === 0){
    console.log("Empty Object");
}
else{
    console.log("NoN Empty Object");
}
    