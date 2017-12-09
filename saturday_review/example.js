/*
Final Review 12/9
*/

/* Promises
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

// Promises prevents callback "hell".
// This is just an example of how we would use promises.
const bluebird = require('bluebird');
const readfile = bluebird.promisify(require('fs').readFile);

  let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    let x = Math.random(1);

    if (x <= 0.5) {
      reject(new Error('too low!'));
    }
    else {
      resolve('we got what we wanted.');
    }
  });

  myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage);
  })
  .catch((err) => {
    // Handle error here.
    console.log('we got an error ', err.message);
  });



/* auth

Hashing without salting means that the same passwords will generate the same
hashes if no salts are applied and the hashing algorithm remains the same.
Thus, we can use rainbow tables/brute force methods to crack passwords.

However, if we add a salt, we can guarantee uniqueness of hashes, even if
the passwords themselves are not the same.

Please read this link for a great explanation on why we need salts.
https://security.stackexchange.com/questions/51959/why-are-salted-hashes-more-secure-for-password-storage
*/

let password = 'password';
let saltRounds = 10;

const bcrypt = require('bcrypt');
bcrypt.hash('password', saltRounds, function(err, hash) {
  console.log(hash);
})


/* socketio and Polling

See the demo: https://github.com/socketio/chat-example/blob/master/index.js#L10-L14

Note that on lines 83-87 below, we define what socketIO does on a connection and when
receiving an instruction named "chat message".

Learn more about socketIO:
https://stackoverflow.com/questions/16719282/how-does-socket-io-work

We also need to make sure that the front end code has the socketIO library.
https://github.com/socketio/chat-example/blob/master/index.html

SocketIO vs Polling:
https://mashhurs.files.wordpress.com/2016/09/polling_websocket.png?w=616&h=427

Polling (simplified):
Send request to server to see if there's any new data to update front-end with.

Long Polling:
Increase time between polls to server.
*/

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

/* cors

Cross-origin resource sharing (CORS) is a standard for accessing web resources
on different domains. CORS allows web scripts to interact more openly with
content outside of the original domain, leading to better integration between
web services.
*/

/*
React (Sample component)
*/

class SimpleExample extends React.Component {
	// React components are simple functions that take in props and state, and render HTML

  anotherfunction() {
    return 1 + 1;
  }

	render() {
		return (
			<div somepropvalue={this.anotherfunction()}>
        <p>
          Hi, Im a paragraph.
        </p>
      </div>
		);
	}
}

// Render react code inside an element with ID = "container"
ReactDOM.render(<SimpleExample />, document.getElementById('container'));

/*
css/markup
See sample.html
*/
