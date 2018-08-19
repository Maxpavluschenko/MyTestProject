const express = require('express');
const app = express(); 


// serve static files
app.use("/node_modules", express.static(__dirname + '/node_modules/'));
app.use("/static", express.static('app'));

// render index html
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// handle default route
app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('listening on port 3000')
});