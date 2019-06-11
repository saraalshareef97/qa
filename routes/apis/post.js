const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");

// Get all the posts

router.get("/", (req, res, next) => {
  Post.find()
    .then(posts => {
      res.json(posts);
    })
    .catch(err => console.log(err));
});

//Create a post

router.post("/add", (req, res, next) => {
  const title = req.body.title;
  const body = req.body.body;
  newPost = new Post({
    title: title,
    body: body
  });
  newPost
    .save()
    .then(post => {
      res.json(post);
    })
    .catch(err => console.log(err));
});

// To update a Post
router.put("/update/:id", (req, res, next) => {
  // Grab the id of the post
  let id = req.params.id;
  // find the Post by id from the database

  Post.findById(id)
    .then(post => {
      post.title = req.body.title;
      post.body = req.body.body;
      post
        .save()
        .then(post => {
          res.send({
            message: " post updated successfuly",
            status: "success",
            post: post
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

//Make delete Req

router.delete("/:id", (req, res, next) => {
  let id = req.params.id;
  Post.findById(id)
    .then(post => {
      post
        .delete()
        .then(post => {
          res.send({
            message: " post deleted successfuly",
            status: "success",
            post: post
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});
module.exports = router;
