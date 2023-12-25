// let btn = document.querySelector('button');

// btn.onclick = function() {
//     console.log("Button Clicked");
// }

// let btns = document.querySelectorAll('button');

// for(btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function() {
//         console.log("Hey You are in range");
//     }
// }

// for(btn of btns) {
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
// }

// function sayHello()  {
//     alert("Hello");
// }
// function sayName() {
//     alert("Apna College");
// }

// function sayHey() {
//     console.log("Hey You are in range");
// }

// let para = document.querySelector("p");
// para.addEventListener("click",function() {
//     console.log("Parah was Clicked");
// });

// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// let para = document.querySelector("p");
// let btn1 = document.querySelector("button");

// function changeColor() {
//     this.style.background="blue";
// }

// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// para.addEventListener("click",changeColor);
// btn1.addEventListener("click",changeColor);


// Exercise...

let btn = document.querySelector("button");



let div = document.querySelector('div');

btn.addEventListener('click',function() {
    let h3 = document.querySelector("h3");
    let randomColor = generateColor();
    h3.innerText = randomColor;
});
btn.addEventListener('click',createBackground);

function generateColor() {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    let color = `rgb(${red}, ${green}, ${blue})`;    

    return color;
}

function createBackground() {
    let clr = generateColor();
    div.style.background = clr;
}


