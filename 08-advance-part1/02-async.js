// --------------- setTimeout --------------


// 
// setTimeout(function(){
//     console.log("SAy Hello SSB");
// },3000);
// ----> After 3 Second Print "SAy Hello SSB" only once




// 
// const saySSB = () =>{
//     console.log("SAy Hello SSB");
// };

// setTimeout(saySSB,3000);
// ----> After 3 Second Print "SAy Hello SSB" only once





// 
// const changeText = () =>{
//     document.querySelector("#texth1").innerHTML = "SAAI AYU ABHI Shiv";
// };

// setTimeout(changeText,3000);
// ---> After 3 Second Change H1 Tag Text








// --------------- setTimeout & clearTimeout--------------
// After click on stop button Automatically H1 Text Come Stop





// const changeText = () =>{
//     document.querySelector("#texth1").innerHTML = "SAAI AYU ABHI Shiv";
// };

// const clearTime = setTimeout(changeText,3000);

// const btnStop =  document.querySelector("#stop").addEventListener("click", (e) => {
//     clearTimeout(clearTime);
// },false)












// --------------- setTimeout & clearTimeout--------------
// After click on start and stop button Display console start 


const sayDate = (input) => {
    console.log(input + Date.now());
}

let intervalId;

const btnStart =  document.querySelector("#start").addEventListener("click", (e) => {
    intervalId = setInterval(sayDate,1000,"Hello --->   ")
},false)


const btnStop =  document.querySelector("#stop").addEventListener("click", (e) => {
    clearInterval(intervalId);
},false)

