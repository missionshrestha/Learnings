//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose")

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/BlogSite-V2")

const blogPostSchema = new mongoose.Schema({
  title: String,
  description: String
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

const post1 = new BlogPost({
  title: "t1",
  description: "THis is the 1st lorem blog postTHis is the 1st lorem blog postTHis is the 1st lorem blog postTHis is the 1st lorem blog post"
})
const post2 = new BlogPost({
  title: "t2",
  description: "THis is the 1st lorem blog postTHis is the 1st lorem blog postTHis is the 1st lorem blog postTHis is the 1st lorem blog post"
})
const post3 = new BlogPost({
  title: "t3",
  description: "THis is the 1st lorem blog postTHis is the 1st lorem blog postTHis is the 1st lorem blog postTHis is the 1st lorem blog post"
})

// post1.save();
let posts = [];

app.get("/", function (req, res) {

  BlogPost.find({}, function (err, foundBlogPosts) {
    if (err) {
      console.log("Error in blogpost find");
    }
    else {
      res.render("home", {
        startingContent: homeStartingContent,
        posts: foundBlogPosts
      });
    }
  })

});

app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  /*  const post = {
     title: req.body.postTitle,
     content: req.body.postBody
   }; */

  const newPost = new BlogPost({
    title: req.body.postTitle,
    description: req.body.postBody
  })

  posts.push(newPost);

  BlogPost.insertMany(posts, function (err) {
    if (err) {
      console.log(err + "Error in blogpost insert")
    }
    else {
      console.log("Successfully inserted posts into db")
      res.redirect("/");
    }
  })


});

app.get("/posts/:postName", function (req, res) {

  BlogPost.find({}, function (err, foundBlogPosts) {
    if (err) {
      console.log("Error in blogpost find");
    }
    else {
      const requestedTitle = _.lowerCase(req.params.postName);
      foundBlogPosts.forEach(function (post) {
        const foundTitle = _.lowerCase(post.title);
        const foundDescription = (post.description);

        if (foundTitle === requestedTitle) {
          /*  console.log(foundTitle);
           console.log(foundDescription)
           console.log(foundBlogPosts.title); */
          res.render("post", {
            title: foundTitle,
            description: foundDescription
          });
        }
      });
    }
  })
  /*   posts.forEach(function (post) {
      const storedTitle = _.lowerCase(post.title);
  
      if (storedTitle === requestedTitle) {
        res.render("post", {
          title: post.title,
          description: post.description
        });
      }
    }); */

});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
