// --------- Old Method ----------

// document.querySelector("#i3").onclick = () => {
//     alert("i3 image clicked ");
// };




// --------- addEventListener() ----------

/* imp topic interview

type, timeStamp, preventDefault
target, toElement, srcElement, currentTraget
clientX, clientY, screenX, screenY
altkey, ctrlkey, shiftkey, keycode

*/


// 
// document.querySelector('#i3').addEventListener('click', () => {
//     console.log('I3 Clicked');
// } ,false);



// IMP
// document.querySelector("#i3").addEventListener("click", (e)=> {
//     console.log(e);
// },false)







// --------- Event Propogation ----------
// Type 1 Event Bubbling ---> false (Inside to Outside)
// Type 2 Event Capturing ---> true (Outside to Inside)

// stopPropogation()




// Inside to Outside ---> Event Bubbling
// UL click 
// document.querySelector("#images").addEventListener('click', (e) => {
//     console.log("UL click");
// },false)

// // Image Click
// document.querySelector("#i3").addEventListener('click', (e) => {
//     console.log("Image 3 click");
// },false)
// ---->
/*
Image 3 click
UL click
*/




// Outside to Inside ---> Event Capturing
// UL click 
// document.querySelector("#images").addEventListener('click', (e) => {
//     console.log("UL click");
// },true)

// // Image Click
// document.querySelector("#i3").addEventListener('click', (e) => {
//     console.log("Image 3 click");
// },true)

// ---->
/*
UL click
Image 3 click
*/






// Image Click hua to bhi U click nahi ana chahiyeL
// UL click 
// document.querySelector("#images").addEventListener('click', (e) => {
//     console.log("UL click");
// },false)

// // Image Click
// document.querySelector("#i3").addEventListener('click', (e) => {
//     console.log("Image 3 click");
//     e.stopPropagation()
// },false)





// --------- Google pe click Kiye to URL NA OPen HO ----------

// document.querySelector("#google").addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log("GOOGLE CLICKED");
// },false);









// --------- Question : Image Clicked Then Image remove ho jaye ----------


const ulist = document.querySelector('#images');

ulist.addEventListener('click', (e) => {
    // console.log( "target: " + e.target);
    // console.log( "target TagName: " + e.target.tagName );
    // console.log( "target Parent Node: " + e.target.parentNode );

    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        // li element Selection
        let removeIt = e.target.parentNode;
        removeIt.remove();
    };
} ,false)

