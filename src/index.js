const express = require("express");
const app = express();
const port = 3000;


//route
app.get("/", function (req, res) {
  res.send("Hello VietNam");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
