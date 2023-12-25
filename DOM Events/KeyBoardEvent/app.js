let btn = document.querySelector("button");

btn.addEventListener("click",function(event){
    console.log(event);
    console.log("Button Clicked");
});

// let inp = document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     console.log("Key: ",event.key);
//     console.log("Code: ",event.code);
//     console.log("Key was pressed");
// });


// inp.addEventListener("keyup",function(){
//     console.log("Key was released");
// });


// inp.addEventListener("keydown",function(event){
//     console.log(event.code);

//     if(event.code=="ArrowUp") {
//         console.log("Move upward");
//     }
//     else if(event.code=="ArrowDown") {
//         console.log("Move Down");
//     }
//     else if(event.code=="ArrowLeft") {
//         console.log("Move Left");
//     }
//     else if(event.code=="ArrowRight"){
//         console.log("Move Right");
//     }
//     else {
//         console.log("Wrong Key");
//     }
// })


let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    // console.log("form submitted");

    // let inp = document.querySelector("input");

    // console.log(inp);
    // console.dir(inp);
    // console.log(inp.value);

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");



    // console.log(user.value);
    // console.log(pass.value);

    // alert(`Username is ${user.value} and Password is set to ${pass.value}`);
    console.dir(form);
});