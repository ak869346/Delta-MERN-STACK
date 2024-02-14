// async function greet() {
//     // throw "random error";
//     return "Hello";
// }

// greet()
// .then((result)=>{
//     console.log("Promise was resolved");
//     console.log("Result is: ",result);
// })
// .catch((err)=>{
//     console.log("Promise was rejected");
//     console.log("Error is: ",err);
// })


// arrow function...

// let demo = async ()=> {
//     return 5;
// }

// function getNum() {

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     })
//     // console.log(5);
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

let h1 = document.querySelector("h1");

function changeColor(color,delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("Color Changed");
        },delay);
    });
}

async function demo() {
    try {
    await changeColor("Red",1000);
    await changeColor("Orange",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);
    await changeColor();
    }
    catch(err) {
        console.log(err);
    }

    let num = 5;
    console.log("Number is ",num);
}
// changeColor("red",1000)
//     .then(()=>{
//         console.log("red color was changed");
//         return changeColor("orange",1000);
//     })
//     .then(()=>{
//         console.log("Orange color was changed");
//         return changeColor("green",1000);
//     })
//     .then(()=>{
//         console.log("Green color was changed");
//         return changeColor("Yellow",1000);
//     })
//     .then(()=>{
//         console.log("Yellow color was changed");
//     })