//jshint esversion:6
//Starting code for your milestone project
/* All HTML(ejs) files are kept ready with little bit of css added. Your tasks are to complete the final project step by step.
 Whatever was taught till now, you have to apply it and finish your project. This is sort of a weekly task where
whatever you learn that week, you have to implement. */
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
  res.render("home");  
});

//add GET request code for the path "/about" here...
app.get("/about", (req,res) =>{
  res.render('about');
});


//add GET request code for the path "/contact" here...
app.get("/contact", (req,res) =>{
  res.render('contact');
});


//add GET request code for the path "/post" here...
app.get("/post", (req,res) =>{
  res.render('post');
});


//add POST request code for the path "/post" here...
app.post("/post", (req, res) =>{
  console.log(req.body);
});

//add GET request code for the path "/compose" here...
app.get("/compose", (req,res) =>{
  res.render('compose');
});

app.listen(3000, function(){
  console.log('Server started at port 3000');
});
