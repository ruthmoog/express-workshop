var express = require('express');
var formidable = require('express-formidable');
var fileSystem = require('fs');

var app = express();

app.use(express.static('public'));
app.use(formidable());

app.post('/create-post', function(request) {
  fileSystem.readFile(__dirname + '/data/posts.json', function (error, file) {
    var blogPosts = JSON.parse(file);
    var timeStamp = Date.now()

    blogPosts[timeStamp] = request.fields.blogpost
    fileSystem.writeFile(__dirname + '/data/posts.json', JSON.stringify(blogPosts), function (error) {
      console.log(file.toString());
    });
  });
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000 and is ready to accept requests!  HOORAY!')
});
