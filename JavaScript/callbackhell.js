let h1 = document.querySelector("h1");

// h1.style.color = "red";


function changeColor(color,delay,nextColorChange) {
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange) nextColorChange();
    },delay);
}

changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000,()=>{
                changeColor("pink",1000);
            });
        });
    });
});


function changeColor(color,delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("Color Changed");
        },delay);
    });
}

changeColor("red",1000)
    .then(()=>{
        console.log("red color was changed");
        return changeColor("orange",1000);
    })
    .then(()=>{
        console.log("Orange color was changed");
        return changeColor("green",1000);
    })
    .then(()=>{
        console.log("Green color was changed");
        return changeColor("Yellow",1000);
    })
    .then(()=>{
        console.log("Yellow color was changed");
    })

// changeColor("green",2000);
// changeColor("yellow",3000);

// setTimeout(changeColor("red"),1000);
// setTimeout(changeColor("green"),2000);
// setTimeout(changeColor("yellow"),3000);



// setTimeout(()=> {
//     h1.style.color="red";
// },1000);

// setTimeout(()=> {
//     h1.style.color="green";
// },2000);

// setTimeout(()=> {
//     h1.style.color="yellow";
// },3000);