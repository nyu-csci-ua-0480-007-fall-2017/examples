
// SOCKET.IO
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

// Socket.io server and client communication
// Every 'emit' event should have a matching 'on' event on the opposite side

// Server Side Code

io.on('connect', function(socket){
  // Let's send back the socket's id immediately when they connect
  socket.emit('id', socket.id);  //The socket is UNIQUE per client!

  // Event handler for when the client sends the server a 'chat' message
  socket.on('chat', function(message){
    console.log(message); //This will log out 'Hello!' (see below)
    socket.emit('chat', 'Bye!'); //Always send back 'Bye'
  });
});


// Client Side Code
// ... HTML setup ...
// <script>
var socket = io();
socket.on('id', function(msg){
  console.log(id); // We get sent our unqiue id from the server when we connect
  //Let's send a 'Hello' chat message back!
  socket.emit('chat', 'Hello!');
});

// Event handler for when the server send the client a 'chat' message
socket.on('chat', function(message){
  console.log(message); //This will log out 'Bye'
});
//</script>



// DOM MANIPULATION
// Javascript sees an HTML page as a large tree of nested HTML elements
// Javascript DOM code allows you to traverse & manipulate this tree
// For a full example, please see the dom-workshop directory in this repository

// Methods:
// document.getElementById('id')
// document.querySelector('param') <--param can be: #id, .class, or tagname
// document.getElementsByClassName('class') <-- returns pseudo-JS array, be careful!
// document.getElementsByTagName('tag') <-- tag means h1, p, a, etc..




// PROMISES

// We use promises when we have several asynchronous calls that depend on each other
// Without promises, we end up with a very ugly and confusing 'pyramid' of nested callbacks

// The callback inside the Promise constructor gets invoked IMMEDIATELY
// Then, depending on the result of the asynch call (for this example, it's the User.find)
// the promise looks at the `.then` method for the code for the resolve or reject callback
let p = new Promise(function(resolve, reject){
  User.find({'someIdHere'}, function(error, user){
    if(error){
      reject(error); //With a reject, it's common to pass in the error object
    }else{
      resolve(user);
    }
  });
});

let p2 = p.then(
  // We found a user!
  function(user){
    // I now want to make an asynch Post call to find a Post associated with the found user
    // I can return a new promise within a .then, and set the return value equal to a new promise, p2
    return new Promise(function(resolve, reject){
      Post.find({'user': user}, function(err, post){
        if(err){
          reject(err);
        }else{
          resolve(post);
        }
      });
    })
});

// This .then will catch the resolve/reject from the Post.find above.
// If the Post call was a prerequsite for another asynchronous call,
// I could return another new Promise inside of this callback, instead of just console.logging.
// AKA, we can then continuously 'chain' together promises until we're done making asynchronous calls!
p2.then(function(post){
  console.log("I found a Post associated with the User: " + post);
}, function(error){
  console.log('There was an error :( :' + error);
});
