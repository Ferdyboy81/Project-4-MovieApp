var express = require("express"),
bodyParser = require('body-parser'),
morgan = require('morgan');

var express = require("express"),
    fs = require('fs'),
    port = process.env.PORT || 3000;

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set("view options", {
    layout: false
});
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('public/index.html');
});

app.get('/movies', function (req, res) {
    var movies = require('./data/movies/json');
    res.json(movies);
})

app.listen(port);
console.log('Express server running at http://localhost:' + port);
