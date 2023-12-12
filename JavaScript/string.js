let msg = "    Hello      ";
console.log(msg.toLowerCase());
console.log(msg.toUpperCase());

console.log(msg.trim().toUpperCase());

let str = "Ilovecoding";
let str1 = str.replace("love","do");
console.log(str1);

console.log(str.repeat(3));

let xyz = "trim!";
console.log(xyz.trim().toUpperCase());  

let students = ["Aman","Shradha","rajat"];
console.log(students);
console.log(students.length);

students[0]= "Ankit";
console.log(students);

let cars = ["Audi","bmw","maruti","Hundyai"];
cars.push("Toyota");
console.log(cars);
cars.pop();
console.log(cars);

cars.unshift("ferari");
console.log(cars);
cars.shift();
console.log(cars);

let starts = ['january','july','march','august'];
console.log(starts);
starts.shift();
starts.shift();
starts.unshift('june');
starts.unshift('july');
console.log(starts);

let primary = ["red","yellow","blue"];
let secondary = ["orange","green","voilet"];
console.log(primary.indexOf("red"));
console.log(primary.includes("blue"));
console.log(primary.concat(secondary));
console.log(primary.reverse());

let colors = ["red","yellow","green","blue","orange","voilet"];
let newColors = colors.slice(1,5);
console.log(colors);
console.log(newColors);
console.log(colors.slice(-2));

colors.splice(4);
console.log(colors);

colors.splice(0,1);
console.log(colors);

colors.splice(0,1,"Aman","Shradha");
console.log(colors);    

console.log(colors.sort());

let months = ['january','july','march','august'];
months.splice(0,2,'july','june');
console.log(months);

let arr = ['a','b'];

let arrCopy = arr;

arr.push('c');
console.log(arr);


let pra = [[1,2],[3,4],[5,6]];
console.log(pra);

let game = [['X',null,'O'],[null,'X',null],['O',null,'X']];
console.log(game);
game[0][1]='O';
console.log(game);


let maths = [1,2,3,4,5];
let n = 3;
for(let j=0;j<3;j++) {
    console.log(maths[j]);
}

for(let j=maths.length-1;j>=2;j--) {
    console.log(maths[j]);
}

for(let i=1;i<=5;i++) {
    console.log(i);
}

for(let i=5;i>=1;i--) {
    console.log(i);
}


for(let i=1;i<=15;i++) {
    if(i%2!=0) {
        console.log(i);
    }
}

for(let i=1;i<=15;i+=2) {
    console.log(i);
}

for(let i=2;i<=10;i+=2) {
    console.log(i);
}

for(let i=5;i<=50;i+=5) {
    console.log(i); 
}

// // let a = prompt("Enter the number");
// a = parseInt(a);
// for(let i=a;i<=a*10;i+=a) {
//     console.log(i);
// }

// for(let i=1;i<=3;i++) {
//     console.log(`outer loop ${i}`);
//     for(let j=1;j<=3;j++) {
//         console.log(j);
//     }
// }

// let p =1;
// while(p<=5) {
//     console.log(p);
//     p++;
// }


let fruits = ["mango","apple","banana"];
for(let i=0;i<fruits.length;i++) {
    console.log(i,":",fruits[i]);
}


let heros = [["Ironman","Thor","Spiderman"],["Superman","Wonder women","flash"]];
console.log(heros);

for(let i=0;i<heros.length;i++) {
    console.log(`first array ${i}`);
    for(let j=0;j<heros[i].length;j++) {
        console.log(heros[i][j]);
    }
}

let veh = ["Benz","HondaCity","Innova"];

for(v of veh) {
    console.log(v);
}

let coaching = "PSA";
for(c of coaching) {
    console.log(c);
}