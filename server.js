var express = require("express");
var formidable = require("express-formidable");
var fileSystem = require("fs");

var app = express();

app.use(express.static("public"));
app.use(formidable());

app.post("/create-post", function(req, res) {
  fileSystem.readFile(__dirname + "/data/posts.json", function(error, file) {
    var blogPosts = JSON.parse(file);
    var timeStamp = Date.now();

    blogPosts[timeStamp] = req.fields.blogpost;
    fileSystem.writeFile(
      __dirname + "/data/posts.json",
      JSON.stringify(blogPosts),
      function(error) {
        console.log(file.toString());
      }
    );
  });
});

app.get("/get-posts", function(req, res) {
  res.sendFile(__dirname + "/data/posts.json");
});

app.get("/posts/:postId", function(req, res) {
  fileSystem.readFile(__dirname + "/data/posts.json", function(error, file) {
    var blogPosts = JSON.parse(file);
    res.send(blogPosts[req.params.postId]);
  });
});

app.listen(3000, function() {
  console.log(
    "Server is listening on port 3000 and is ready to accept requests!  HOORAY!"
  );
});
