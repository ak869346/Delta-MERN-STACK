console.log("Hello People");
console.log("Pankaj Sir Academy");

let a = 10;
let b = 10;

console.log("Sum is :" + (a+b));


let bookPrice = 100;
let penPrice = 20;

console.log(`The total Price is ${bookPrice+penPrice} rupees`);


// Arithmetic Operators...

let x = 10;
let y = 5;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x**y);

console.log(x++);
console.log(++x);

let age = 18;
console.log(age>18);

console.log(3>5);
console.log(5>=5);

console.log("123"==123);
console.log("123"===123);

console.log('a'<'b');


// Conditional Statement.........

console.log("Before if Statement");

let ag = 14;
if(ag>=18) {
    console.log("You can Vote");
    console.log("You can Drive");
}
if(ag<18) {
    console.log("You can't vote");
}
console.log("After my if Statement");


let name = "Ankit";
if(name=="Ankit") {
    console.log(`Welcome ${name}`);
}


// Practice Q 1

let color="red";
if(color=="red") {
    console.log("Stop Here");
}
if(color=="yellow") {
    console.log("Move Slowly");
}
if(color=="Green") {
    console.log("Go Freely");
}


// if else syntax

let mAge = 5;
if(mAge>=18) {
    console.log("You can Vote");
}
else if(mAge<10) {
    console.log("You are Kids");
}
else if(mAge>10 && mAge<18){
    console.log("You are child and can't vote now");
}


let marks = 20;
if(marks>=80) {
    console.log("A+");
}
else if(marks>=60) {
    console.log("A");
}
else if(marks>=33) {
    console.log("C");
}
else if(marks<33) {
    console.log("F");
}

let totalRuns = 240;

if(totalRuns>290) {
    console.log("India Win");
}
else {
    console.log("Australia Win");
}


// Practice Q 2

let size = "XL";
if(size==="XL") {
    console.log("Price is 250");
}
else if(size==="L") {
    console.log("Price is 200");
}
else if(size=="M") {
    console.log("Price is 100");
}
else {
    console.log("Price is 50"); 
}

let grade = 87;
if(grade>=33) {
    if(grade>80) {
        console.log("Outstanding");
    }
    else {
        console.log("Good");
    }
}
else {
    console.log("Failed");
}


// Logical Operator.....

// logical AND
console.log((5>3) && (4>9));

// logical OR

console.log((4>3) || (3>9));

// Logical NOT

console.log(!true);
console.log(!(7>3));


let str = "Shubham Kumar";

if((str[0]==='a') && (str.length>=5)) {
    console.log("Good String");
}
else {
    console.log("Not a Good String");
}


// Switch Case....

let clr = "green";

switch (clr) {
    case "green":
        console.log("Green");
        break;
    case "blue":    
        console.log("Blue");
        break;
    case "yellow":
        console.log("Yellow");
        break;
    default:
        console.log("Wrong Input");
        break;
}


// Practice Q 3.

let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong Input");
        break;
}


// alert("Something is wrong");
console.error("This is an Error");
console.warn("This is a Warning");

let myName = prompt("Enter Your Name");
let myLastName = prompt("Enter last Name");

console.log(`Your full name is ${myName + " " + myLastName}`);

let msg = "     Hello     ";





