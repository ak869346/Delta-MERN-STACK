let arr = [1,2,3,4,5];

// let print = function(el) {
//     console.log(el);
// }


// arr.forEach(print);

// arr.forEach(function(el) {
//     console.log(el);
// });

arr.forEach((el)=> {
    console.log(el);
});


let arr1 = [
    {
        name:"Shradha",
        marks:95
    },
    {
        name:"Aman",
        marks:93
    },
    {
        name:"Priya",
        marks:89
    }
]

arr1.forEach((student)=> {
    console.log(student.name);
})


// map function...

let num = [1,2,3,4,5];

// let newArr = num.map(square);

function square(el) {
    return el*el;
}


let newArr = num.map((el)=> {
    return el*el;
})


let gpa = arr1.map((el)=> {
    return el.marks/10;
});


// filter function....

let nums = [1,2,3,4,7,9,8,2,10,12,11];

let ans = nums.filter((el)=> {
    return el%2==0;
});


// every function...

nums.every((el)=>{
    return el%2==0;
});     // return false.....


nums.some((el)=> {
    return el%2==0;
});    // return true.....


// reduce function....

let ankit = [1,2,3,4,5,6];

 let finalVal = ankit.reduce((res,el)=> {
    console.log(res);
    return res+el;
});

console.log(finalVal);


let prashant = [1,3,5,6];

let finPra = prashant.reduce((res,el)=> {
    return res+el;
});
console.log(finPra);

// Maximum in array....

let nishant = [2,3,4,5,,3,4,7,8,1,2];

let maxi = nishant.reduce((max,el)=> {
    if(el>max) {
        return el;
    }
    else {
        return max;
    }
});

console.log(maxi);


// Practice Question...

let x = [10,20,30,40,50];

let res = x.every((el)=> {
    return el%10==0;
});

console.log(res);


function getMin(x) {
    let mini = x.reduce((min,el)=> {
        if(el<min) {
            return el;
        }
        else {
            return min;
        }
    })

    return mini;
}



let mini = x.reduce((min,el)=> {
    if(el<min) {
        return el;
    }
    else {
        return min;
    }
});

console.log(mini);


// Default Value....
function sum(a,b=3) {
    return a+b;
}

console.log("sum is: ",sum(1));

// Spread...

console.log(Math.min(...x));
console.log(...x);
console.log(..."ApnaCollege");


let y = [...x];
console.log(y);
y.push(29);
console.log(y);
console.log(x);
let chars = [..."Hello"];
console.log(chars);


let even = [2,4,6,8,10];
let odd = [1,3,5,7,9];

let nums1 = [...even,...odd];
console.log(nums1);


// spread on Object Literals....

let data = {
    email:"Ironman123@gmail.com",
    pass:12345,
};

let dataCopy = {...data,id:123};
console.log(dataCopy);


let obj1 = [1,2,3,4,5];
let obj2 = {...obj1};
console.log(obj1);


function min() {
    console.log(arguments);
    console.log(arguments.length); 
}


function add(...args) {
    return args.reduce((res,el)=> {
        return res+el;
    })
};

console.log(add(1,2,3,4,5));

// Arrays Destructuring.....


let names = ["Vikash","Ankit","Prashant","Nishant"];
let [winner,runnerup,...others] = names;
console.log(winner);
console.log(runnerup);
console.log(others);

// Object Destructuring....

let student = {
    name:"Ankit",
    age:24,
    roll:14,
    username:'ankit@123',
    pass:12345,
};


let {username:user,pass:secret}= student;
console.log(user);
console.log(secret);