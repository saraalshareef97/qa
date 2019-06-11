const express = require("express");
const router = express.Router();
//const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
// Load User model
const User = require("../models/user");

// Register Page
router.get("/register", function(req, res) {
  res.render("register");
});

// Login Page
router.get("/login", function(req, res) {
  res.render("login");
});

// Register
router.post("/register", function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.passwprd;
  var password2 = req.body.passwprd2;

  // validation
  req.checkBody("name", "Name is requierd").notEmpty();
  req.checkBody("email", "Email is requierd").notEmpty();
  req.checkBody("email", "Email is not vaild").isEmail();
  req.checkBody("username", "Name is requierd").notEmpty();
  req.checkBody("password", "password is requierd").notEmpty();
  req
    .checkBody("password2", "Passwords do not match")
    .equals(req.body.password);
  var errors = req.validationErrors();

  if (errors) {
    res.render("/register", {
      errors: errors
    });
  } else {
    var newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password
    });
    User.createUser(newUser, function(err, user) {
      if (err) throw err;
    });

    req.flash("success_msg", "You are now registerd and can login!");
    res.redirect("/users/login");
  }

  passport.use(
    new LocalStrategy(function(username, password, done) {
      User.getUserByUsername(username, function(err, user) {
        if (err) throw err;
        if (!user) {
          return done(null, false, { message: "Unknown user" });
        }
        User.comparePassword(password, user.password, function(err, isMatch) {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Invalid password" });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
      done(err, user);
    });
  });

  router.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/users/login",
      failureFlash: true
    }),
    function(req, res) {
      res.redirect("/");
    }
  );

  router.get("/logout", function(req, res) {
    req.logot();
    req.flash("success_msg", "You re logged out");
    res.redirect("/users/login");
  });
});
module.exports = router;
