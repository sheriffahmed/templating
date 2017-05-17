var express = require("express")
	path = require("path"),
	app = express();
	ejs = require("ejs")

app.set("view engine", "ejs")

app.get("/", function(req,res){
   res.render("home");
});

app.get("/login", function(req,res){
   res.render("login");
});

app.get("/signup", function(req,res){
   res.render("signup");
});

app.listen(8080);

console.log("server is running");