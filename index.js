var express = require("express"),
    fs = require('fs'),
    port = process.env.PORT || 3000;

var app = express();


app.set("view options", {
    layout: false
});
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('public/index.html');
});

app.listen(port);
console.log('Express server running at http://localhost:' + port);
