const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const ExpressValidator = require("express-validator");
const expressLayouts = require("express-layouts");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
var exphbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
var router = express.Router();
var routes = require("./routes/index2");
var users = require("./routes/users");
var mongodb = require("mongodb");
const app = express();
var LocalStrategy = require("passport-local").Strategy;

app.use("/", routes);

mongoose.connect("mongodb://localhost:27017/parctice_db");
var db = mongoose.connection;
// View Engine
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "layout" }));
app.set("view engine", "handlebars");

// BodyParser Middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set static folder

app.use(express.static(path.join(__dirname, "/public")));

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

// passport init

app.use(passport.initialize());
app.use(passport.session());

// Express Validator

app.use(
  ExpressValidator({
    errorFormatter: function(param, msg, value) {
      var namespace = param.split("."),
        root = namespace.shift(),
        formParam = root;
      while (namespace.length) {
        formParam += "[" + namespace.shift() + "]";
      }
      return {
        param: formParam,
        msg: msg,
        value: value
      };
    }
  })
);

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

// Database Connection

/*mongoose
  .connect(dbo, {
    useNewUrlParser: true
  })

  .then(() => {
    console.log("Database connected Succesfully");
  })
  .catch(err => {
    console.log("Unable to connect with db");
  });
*/
// Defining the port

// Initialize cors middelware

app.use(cors());

// Routes
const postRoutes = require("./routes/apis/post");
app.use("/api/posts", postRoutes);

app.use("/", routes);
app.use("/users", users);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function() {
  console.log("server Started on port" + app.get("port"));
});
