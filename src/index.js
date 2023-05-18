const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const route = require("./routes");

const db = require("./config/db");
// connect to DB
db.connect();

const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
); // use for submit form use POST method

app.use(express.json()); // use XMLHttpRequest, fetch, axios...

// http logger
// app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.use(methodOverride("_method"));
// routes init
route(app);
app.listen(port, () => {
  console.log("app listening port 3000");
});
