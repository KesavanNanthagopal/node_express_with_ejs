const express = require("express");

const app = express();

//listen in the 3000 port
app.listen(3000);

//set the EJS as the view engine
app.set("view engine", "ejs"); //The ejs default render file which is present in the views folder
// app.set("views", "MyViews"); If we want to change the default folder for the ejs

//provide the response.
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/new_blog", (req, res) => {
  res.render("createBlog");
});

//Redirect the page
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(404).render("404");
});
