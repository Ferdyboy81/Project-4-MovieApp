// loading express modules
var express = require("express"),
// loading node modules
    fs = require('fs'),
    port = process.env.PORT || 3000;
var bodyParser = require('body-parser'),
morgan = require('morgan');

var bookings = [];

// Add Middleware necessary for REST APIs
var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set("view options", {
    layout: false
});

// callback functions:
app.use(express.static(__dirname + '/public')
);

// when get request is made will go to the index.html.
app.get('/', function (req, res) {
    res.render('public/index.html');
});

// dispatches API movies.json
app.get('/movies', function (req, res) {
    var movies = require('./data/movies.json');
    res.json(movies);
});
// update bookings
app.get('/bookings', function (req, res) {
    res.json(bookings);
});

// update bookTickets
app.post('/book', function (req, res) {
    var data = {
        'qty': req.body.qty,
        'date': req.body.date,
        'id': req.body.movie_id,
        'name': req.body.movie_name
    };
    bookings.push(data);
    // res.render('public/template/bookings.html')
    res.json(bookings);
});

app.listen(port);
console.log('Express server running at http://localhost:' + port);
