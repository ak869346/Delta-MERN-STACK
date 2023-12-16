const student = {
    name: "Shradha",
    age: 24,
    eng: 95,
    math: 95,
    phy: 95,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
    }
}

function getAvg() {
    console.log(this);
}


// try and Catch....

let a = 10;

console.log("Ankit");
console.log("Ankit");

try {
    console.log(a);
}
catch (err) {
    console.log("Var a is not defined");
    console.log(err);
}
console.log("Happy");
console.log("Happy");


// Arrow fucntion...

const sum = (a, b) => {
    console.log(a + b);
};

const cube = (n) => {
    return n * n * n;
};

// const cube1 = n => {
//     return n*n*n;
// }  Another style of writing arrow function...

//Implicit return in Arrow function..

const add = (a, b) => a + b;

// SetTImeout Function...

console.log("Hi there");

// setTimeout(()=> {
//     console.log("Apna College");
// },4000);

console.log("Welcome to");

// setInterval ..

// let id = setInterval(()=> {
//     console.log("Life");
// },2000);

// console.log(id);


// this with arrow function...

const person = {   // global scope...  Window Object...
    name: "Suhani Sah",
    marks: 95,
    prop: this,
    getName: function () {   // normal function..
        console.log(this);
        return this.name;
    },
    getMarks: () => {    // arrow function...
        console.log(this);
        return this.marks;
    },

    getInfo1: function () {
        setTimeout(() => {
            console.log(this);   // person object
        }, 2000)
    },
    getInfo2: () => {
        setTimeout(function () {
            console.log(this);    // window object...
        }, 2000)
    }
}

const square = (n) => {
    return n * n;
}


let id2 = setInterval(() => {
    console.log("Hello World")
}, 2000);

setTimeout(()=> {
    clearInterval(id2);
    console.log("stop");
},10000);


// Practice Question....

// Q1.
let arr = [1,2,3,4,5];
const arrayAverage = (arr)=> {
    let sum =0;
    let avg=0
    for(let i=0;i<arr.length;i++) {
        sum+=arr[i];
        avg = sum/arr.length;
    }
    return avg;
};

let res = arrayAverage(arr);
console.log(res);


// Q2.

const isEven = (n)=> {
    if(n%2==0) {
        console.log("Even Number");
    }
    else {
        console.log("Odd Number");
    }
}


