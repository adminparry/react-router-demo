const express = require("express");
const path = require('path');

var app = express();
// static
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/', function(req, res){
    res.render('index', { name: 'John', title:'主页' });
  });

app.listen(8890, () => {
    console.log("http://127.0.0.1:8890")
})