// Bare bones of an Express app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));

// Sending back a static file
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/example.html'));
});

// Log out the form data and redirect 
app.post('/', function(req,res){
	console.log(req.body.firstName);
	res.redirect('/');
});
console.log("Listening on port 8080");
app.listen(8080);
