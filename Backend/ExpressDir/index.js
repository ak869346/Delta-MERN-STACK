const express = require("express");
const app = express();

console.dir(app);


let port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening on ${port}`);
});

app.get("/",(req,res)=>{
    res.send("This is the root path of server ankit");
})

app.get("/:username/:id",(req,res)=>{   // path parameters
    let {username,id} = req.params;
    // console.log(req.params);
    let htmlStr = `<h1>Welcome to the world of @${username}</h1>`
    res.send(htmlStr);
    // res.send(`Welcome to the world of @${username}`);
})

app.get("/search",(req,res)=>{
    // console.log(req.query);
    let {q} = req.query;
    if(!q) {
        res.send("<h1>Nothing searched</h1>");
    }
    res.send(`Search result for query ${q}`);
})
app.get("/apple",(req,res)=>{
    res.send("This is the apple path");
})

app.get("/orange",(req,res)=>{
    res.send("This is the orange path");
})

app.get("*",(req,res)=>{
    res.send("This path does'nt exist");
})

app.post("/orange",(req,res)=>{
    res.send("You send a post request");
})


// app.use((req,res)=> {
//     console.log("Request received");
//     res.send("This is the first response");
// });