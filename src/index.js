const path = require("path");
const express = require("express");
var morgan = require("morgan");
var handlebars = require("express-handlebars");
const app = express();
const port = 3000;

// use static file
app.use(express.static("src/public"));

//Template engine: express-handlebars setup
const hbs = handlebars.engine({ extname: ".hbs" });
// Rendering engine setup
app.engine("hbs", hbs);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//morgan
app.use(morgan("combined"));

//route
app.get("/trang-chu", function (req, res) {
  res.render("home");
});

app.get("/tin-tuc", function (req, res) {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
