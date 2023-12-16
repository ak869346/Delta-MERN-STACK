function hello() {
    console.log("Hello");
}

hello();

function printName() {
    console.log("Apna College");
    console.log("Ankit Kumar");
}

printName();

function print1to5() {
    for(let i=1;i<=5;i++) {
        console.log(i);
    }
}

print1to5();


function isAdult() {
    let age =18;
    if(age>=18) {
        console.log("Adult");
    }
    else {
        console.log("Not Adult");
    }
}

isAdult();


function poem() {
    console.log("Nature's first green is gold,");
    console.log("Her hardest hue to hold.");
    console.log("Her early leaf's a flower;");
    console.log("But only so an hour.");
    console.log("Then leaf subsides to leaf.")
    console.log("So Eden sank to grief,");
    console.log("So dawn goes down to day.");
    console.log("Nothing gold can stay.");
}

poem();


function randomNumber() {
    let num = Math.floor(Math.random()*6)+1;
    console.log(num);
}

randomNumber();


function printName(name) {
    console.log(name);
}

printName("Ankit");

function printInfo(name,age) {
    console.log("Name is",name);
    console.log("Age is",age);
}

printInfo("Ankit",25);

function sum(a,b) {
    console.log(a+b);
}

sum(1,2);
sum(3,5);
sum(5,10);


function average(a,b,c) {
    console.log((a+b+c)/3);
}

average(1,3,5);


function table(num) {
    for(let i=1;i<=10;i++) {
        console.log(num*i);
    }
}
table(4);   


function sumNUmber(n) {
    let sum =0;
    for(let i=1;i<=n;i++) {
        sum+=i;
    }
    return sum;
}

let res = sumNUmber(10);
console.log(res);

let arr =  ["Ankit","Kumar","Singh"];
let final=" ";
function concString() {
    for(let i=0;i<arr.length;i++) {
        final += arr[i];
    }
    return final;
}

let str = concString();
console.log(str);


// function expression....

let sum1 = function(a,b) {
    return a+b;
}

let res1 = sum1(2,4);
console.log(res1);


let fe = function() {
    console.log("Hello");
}

fe();

// Higher order function...

function multipleGreet(func,n) {
    for(let i=1;i<=n;i++) {
        func();
    }
}

let greet = function() {
    console.log("Hello");
}

multipleGreet(greet,1000);


// Return a function.... (Higher order function...)

let request = "even";

function oddEvenFactory(request) {
    if(request=="even") {
        let even = function(n) {
            console.log(n%2==0);
        }
        return even;
    }
    else if(request=="odd") {
        let odd = function(n) {
            console.log(!(n%2==0));
        }      
        return odd;
    }
    else {
        console.log("Wrong request");
    }
}

let funG = oddEvenFactory(request);


// Methods in JS

const calculator = {
    add: function(a,b) {
        return a+b;
    },

    sub: function(a,b) {
        return a-b;
    },

    mul: function(a,b) {
        return a*b;
    },

    div: function(a,b) {
        return a/b;
    }
};


// Method shorthand...

const calc = {
    add(a,b) {
        return a+b;
    },
    sub(a,b) {
        return a-b;
    }
};


