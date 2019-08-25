var express = require('express');
var app = express();

app.use(express.static('public'));

app.post('/create-post', function() {
  console.log('/create-post!')
})

app.listen(3000, function() {
  console.log('Server is listening on port 3000 and is ready to accept requests!  HOORAY!')
});
