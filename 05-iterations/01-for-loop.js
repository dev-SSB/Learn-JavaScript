// ------------------------ For Loop --------------------------------


// 
for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}
// ---> 0 1 2 3 4 5 6 7 8 9



//
for (let i = 1; i <= 10; i++) {
    // console.log( ` outer loop ${i}` );
    for(let j = 1;j <= 10; j++){
        // console.log(i + "*" + j + " = " + i*j);
    }   
}
// ---> 1 to 10 Table




// 
let arr = ['flash','batman','joker'];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
}
// ---> flash batman joker




// Break 
for (let index = 0; index < 10; index++) {
    if(index == 5){
        // console.log("detected 5");
        break;
    }
    // console.log("Number "+ index);
}




// Continue 
for (let index = 0; index < 10; index++) {
    if(index == 5){
        // console.log("detected 5");
        continue;
    }
    // console.log("Number "+ index);
}
