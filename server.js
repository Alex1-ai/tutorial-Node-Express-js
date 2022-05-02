const express = require("express"); 



const app = express();

app.get("/", function(req,res){
    res.send('<h1>Hello Node Development   Home Page</h1>');
})

app.get("/contact",function(req,res){
    res.send('<h2>Contact me: alexanderemmanuel1719@gmail.com</h2>');
})

app.get("/about", function(req,res){
    res.send("<h2>This is about Us Page Learn more</h2>")
})


app.listen(3000, function(){
    console.log('This server has starterd at port 3000 localhost');
})
