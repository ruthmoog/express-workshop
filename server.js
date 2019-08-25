var express = require('express');
var formidable = require('express-formidable');
var app = express();

app.use(express.static('public'));
app.use(formidable());

app.post('/create-post', function(request) {
  console.log(request.fields)
})

app.listen(3000, function() {
  console.log('Server is listening on port 3000 and is ready to accept requests!  HOORAY!')
});
