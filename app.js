const express = require("express");

const app = express();

//listen in the 3000 port
app.listen(3000);

//provide the response.

app.get("/", (req, res) => {
    res.send("<p>Hello this is </p>");
  });

  
app.get("/about", (req, res) => {
    res.send("<p>Hello this is about </p>");
  });

  //Redirect the page
app.get("/about-us", (req, res) => {
    res.redirect('/about');
  });

  
app.use((req, res) => {
    res.status(404).send("<p>404 Page not found</p>");
  });
