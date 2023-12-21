// // let smallImg = document.getElementsByClassName("oldImg");

// // for(let i=0;i<smallImg.length;i++) {
// //     smallImg[i].src="assets/spiderman_img.png";
// //     console.log(`value of image no ${i} is changed`);
// // }


// // console.dir(document.querySelector("h1"));

// // console.dir(document.querySelector("#description"));

// // console.dir(document.querySelector(".oldImg"));

// // console.dir(document.querySelectorAll("p"));

// // console.dir(document.querySelector("p"));

// // console.dir(document.querySelector("div a"));

// // console.dir(document.querySelectorAll("div a"));


// let links = document.querySelectorAll(".box a");

// // for(let i=0;i<links.length;i++) {
// //     links[i].style.color="Yellow";
// // }

// for(link of links) {
//     link.style.color="purple";
// }
// console.dir(links);



let para = document.createElement('p');

para.innerText="Hey I am red";
para.style.color="red";

let h3 = document.createElement('h3');
h3.innerText="Hey I am blue h3";    
h3.style.color="blue";
let body = document.querySelector('body');
body.appendChild(para);
body.appendChild(h3);


let div = document.createElement('div');

let h1 = document.createElement('h1');

h1.innerText="I am in a Div";

let para1 = document.createElement('p');
para1.innerText="Me too!";

div.appendChild(h1);
div.appendChild(para1);

div.classList.add("back");

body.appendChild(div);

