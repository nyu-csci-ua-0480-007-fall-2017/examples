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

// TODO: Write a post handler for our form 

console.log("Listening on port 8080");
app.listen(8080);
