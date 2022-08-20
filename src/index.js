const path = require("path");
const express = require("express");
var morgan = require("morgan");
var handlebars = require("express-handlebars");
const app = express();
const port = 3000;

// use middleware for express
app.use(
  express.urlencoded({
    extended: true, // use library body-parser
  })
); // client -> server: form html
app.use(express.json()); //client -> server : code javascript json

// use static file
app.use(express.static("src/public"));

//Template engine: express-handlebars setup
const hbs = handlebars.engine({ extname: ".hbs" });
// Rendering engine setup
app.engine("hbs", hbs);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//morgan
// app.use(morgan("combined"));

//route
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/news", function (req, res) {
  res.render("news");
});
app.get("/search", function (req, res) {
  res.render("search");
});

app.post("/search", function (req, res) {
  // UI -> middleware  -> controller
  // req.query -> middleware
  // req.body != middleware => use middleware
  console.log(req.body);
  res.send("");
});

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
