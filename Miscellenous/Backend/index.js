const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({extended: true}));  // to make urlencoded data readble for express
app.use(express.json());    // to make json data readble for express


app.get("/register",(req,res)=> {
    let {user,password} = req.query;
    res.send(`Standard Get Response Welcome! ${user}`);
});

app.post("/register",(req,res)=> {
    let {user,password} = req.body;
    console.log(req.body);
    res.send(`Standard Post Response Welcome! ${user}`);
});

app.listen(port,()=> {
    console.log(`Listening to port ${port}`);
});