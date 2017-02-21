function getJoke() {
  jokeToTell = Math.random();
  if(jokeToTell == 1) {
    return "Knock knock.</br></br>Who's there?</br></br>Beats.</br></br>Beats who?</br></br>Beats me.";
  } else if(jokeToTell == 2) {
    return "Knock knock.</br></br>Who’s there?</br></br>The interrupting cow.</br></br>Interrupting cow wh-</br></br>Moooooo!";
  } else {
    return "Knock, knock!</br></br>Who’s there?</br></br>Opportunity!</br></br>That is impossible.</br></br>Opportunity doesn’t come knocking twice!";
  }
}
// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  var message = "<h1>Jacob's Web Server</h1></br>";
  if (request.url === '/') {
    message += "<p>Welcome to the server</p>";
    message += "<ul>";
    message += "<li><a href='/random-joke'>Random Joke</a></li>";
    message += "<li><a href='/cuteness'>Cuteness</a></li>";
    message += "<li><a href='/bad-page'>Bad Page</a></li>";
  } else if (request.url === '/random-joke') {
    var joke = getJoke();
    message += "<p>" + joke + "</p>";
  } else if (request.url === '/cuteness') {
    message += "<p><img src='http://i.upworthy.com/nugget/57ee80d644c6d1001b00005c/attachments/ComedyAnimalPhotos1-6c824d975bf9f10caad0e001eefa0d8a.jpg' />";
  } else {
    message += request.url + ' was abducted by aliens... ops.';
  }
  response.end(message);
});

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at' + http + port + '/')
