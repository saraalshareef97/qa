const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

const db = require("./config/db").database;

// Database Connection

mongoose
  .connect(db, {
    useNewUrlParser: true
  })

  .then(() => {
    console.log("Database connected Succesfully");
  })
  .catch(err => {
    console.log("Unable to connect with db");
  });

// Defining the port

const port = process.env.PORT || 5000;

// Initialize cors middelware

app.use(cors());

// Initialize body-parser middelware

app.use(bodyParser.json());

// Initilaize public dirctory

/* app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
*/
app.get("/", (req, res) => {
  res.send("<h1> Hello World<h1/>");
});

const postRoutes = require("./routes/apis/post");

app.use("/api/posts", postRoutes);

app.listen(port, () => {
  console.log("server is started at port", port);
});
