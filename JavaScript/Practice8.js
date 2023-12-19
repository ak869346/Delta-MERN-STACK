// Ques 1..
let nums = [1,2,3,4,5];

let newN = nums.map((el)=> {
    return el*el;
})

console.log(newN);

let res = newN.reduce((sum,el)=> {
    return sum+el;
});

console.log(res);

// Quest 2...

let numplus2 = nums.map((el)=> {
    return el+2;
});

console.log(numplus2);

// Quest 3...

let str = ["Ankit","Bhavesh","Utsav","Kunal","Brajesh","Razz","Vikash"];

let newStr = str.map((el)=> {
    return el.toUpperCase();
});

console.log(newStr);
