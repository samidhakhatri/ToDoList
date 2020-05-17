const express= require("express");
const bodyParser= require("body-parser");
const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

var items=["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function(req, res){

var today=new Date();

var options={
  weekday: "long",
  day: "numeric",
  month: "long"
}
var day=today.toLocaleDateString("en-US", options);

res.render("list",{kindOfDay : day, newListItems : items});
})


app.post("/", function(req, res){

var item= req.body.newItem;
items.push(item);
console.log(items);

res.redirect("/");
})









app.listen(300, function(){
  console.log("server started at port 300");
})
