// ---------- .createElement, .setAttribute, style, -----------------
// ------------- Optimize Way Add Text, appendChild  -----------



const div = document.createElement('div');

div.id='main';
div.className='myClassMain';

// console.log(div);


div.setAttribute('title','Generated Title');

// style
div.style.backgroundColor="white";
div.style.color="black";

// innerText
// div.innerText="SSB DIV CREATED";


// Add Text Optimize Way
const addText = document.createTextNode("Optimize Way Text Add:  createTextNode");

// 
div.appendChild(addText);

document.body.appendChild(div);