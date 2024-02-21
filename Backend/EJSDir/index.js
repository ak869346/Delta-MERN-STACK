const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    // res.send("This is home");
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("Hello");
});

app.get("/rolldice",(req,res)=>{
    let num = Math.floor(Math.random()*6) + 1;
    res.render("rolldice.ejs",{diceVal: num});
});

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    console.log(instaData);
    const data = instaData[username];
    // console.log(data);
    if(data) {
        res.render("instagram.ejs",{data});
    }
    else {
        res.render("error.ejs");
    }
    // const followers = ["Adam","Bob","Sulla","Yogi","Modi"];
    // let {username} = req.params;
});

app.listen(port, ()=> {
    console.log(`Listening on ${port}`);
});
