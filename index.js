const express = require("express");
const app = express();
const port = 3000;

app.get("/home", (req, res) => {
  var a = 3;
  var b = 6;

  var c = a + b;
  return res.send("Hello World me!");
});

app.listen(port, () => {
  console.log(`Example app listening on port Me ${port}`);
});
