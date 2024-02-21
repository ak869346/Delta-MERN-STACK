const express = require("express");
const app = express();

const methodOverride = require("method-override");


const { v4: uuidv4 } = require('uuid');

const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id: uuidv4(),
        username: "Apna College",
        content: "I Love Coding"
    },
    {
        id: uuidv4(),
        username: "Ajay Kumar",
        content: "Hardwork is important to achecive success"
    },
    {
        id: uuidv4(),
        username: "Ankit Kumar",
        content: "Money gives comfort"
    },
];

app.get("/posts",(req,res)=> {     // to get all post
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=> {
    res.render("new.ejs");
});

app.post("/posts",(req,res)=> {
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    // res.send("Post request working");
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=> {
    let {id} = req.params;
    let post = posts.find((p)=> id===p.id);
    console.log(post);
    // res.send("Request Working");
    res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=> {    // to change a specific post..
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id===p.id);
    post.content = newContent;
    console.log(post);
    console.log(id);
    // res.send("Patch request working");
    res.redirect("/posts");
});


app.get("/posts/:id/edit",(req,res)=> {
    let {id} = req.params;
    let post = posts.find((p)=> id===p.id);
    res.render("edit.ejs",{post});
});


app.delete("/posts/:id",(req,res)=> {
    let {id} = req.params;
    posts = posts.filter((p)=> id!==p.id);
    res.redirect("/posts");
    // res.send("Delete Success");
});

app.listen(port,()=> {
    console.log(`App is listening at ${port}`);
});