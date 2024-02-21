// let n = 5;

// for(let i=0;i<n;i++) {
//     console.log("Hello",i);
// }
// console.log("Bye");

// let args = process.argv;
// console.log(process.argv);

// for(let i=0;i<args.length;i++) {
//     console.log("Hello to ",args[i]);
// }

// const mathObj = require("./math");

// console.log(mathObj.sum(2,2));

// const info = require("./Fruits");

// console.log(info);
// console.log(info[0]);
// console.log(info[0].name);
// console.log(info[0].color);

// var figlet = require("figlet");

// figlet("Ankit Kumar", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });

import {sum,PI} from "./math.js";

import { generate} from "random-words";
console.log(generate());

console.log(sum(1,2));