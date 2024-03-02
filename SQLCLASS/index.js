const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const express = require("express");
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Ankit@123'
});

// get random data using faker...

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}
// let q = "SHOW TABLES";


// let data = [];

// for(let i=0;i<100;i++) {
//     data.push(getRandomUser());
// }

// let q = "INSERT INTO user(id,username,email,password) VALUES ?";
// let users = [["123b","123_newuserb","abc@gmail.comb","abcb"],["123c","123_newuserc","abc@gmail.comc","abcc"]];
// let user2 = ["123b","123_newuserb","abc@gmail.comb","abcb"];
// let user3 = ["123c","123_newuserc","abc@gmail.comc","abcc"];
// try {
//     connection.query(q,[data],(err,result)=> {
//         if(err) throw err;
//         console.log(result);
//         console.log(result.length);
//         console.log(result[0]);
//         console.log(result[1]);
//     });
// }
// catch(err) {
//     console.log(err);
// }

// connection.end();


// let createRandomUser= ()=> {
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       avatar: faker.image.avatar(),
//       password: faker.internet.password(),
//       birthdate: faker.date.birthdate(),
//       registeredAt: faker.date.past(),
//     };
//   }



// console.log(getRandomUser());
// console.log(createRandomUser());

const port = 8080;


app.get("/",(req,res)=> {
    let q = "SELECT COUNT(*) FROM user";
    try {
        connection.query(q,(err,result)=> {
            if(err) throw err;
            console.log(result[0]['COUNT(*)']);
            res.send(result);
        });
    }
    catch(err) {
        console.log(err);
        res.send("Some error in Database");
    }
    // res.send("Welcome to Home page");
})
app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);
})