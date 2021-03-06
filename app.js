const express= require("express");
const bodyParser= require("body-parser");
const date= require(__dirname+ "/date.js");
const app= express();

console.log(date);

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

var items=["Buy Food", "Cook Food", "Eat Food"];
let workItems=[];

app.get("/", function(req, res){
let day= date.getDate();
res.render("list",{listTitle : day, newListItems : items});
})


app.post("/", function(req, res){

var item= req.body.newItem;

if(req.body.list=="Work"){
  if(item){
    workItems.push(item);
    res.redirect("/work");
  }
}
else{
  if(item){
    items.push(item);
    res.redirect("/");
  }
}

})

app.get("/work", function(req, res){
  res.render("list",{listTitle: "Work List", newListItems: workItems})
});


app.get("/about", function(req, res){
  res.render("about");
})

app.listen(300, function(){
  console.log("server started at port 300");
})
