var port = process.env.PORT || 8080;

var http = require('http');

var server = http.createServer(function (request, response) {
  response.end('<h1>Jacob Web Server</h1>')
  if (request.url === '/') {
    response.end('Greeting');
  } else if (request.url === '/random-joke') {
    var joke = getJoke();
    response.end(joke);
  } else if (request.url === '/random-joke') {
    response.end("Cute Animal Pic");
  } else {
    response.end(request.url + ' was abducted by aliens... ops.');
  }
});

function getJoke() {
  return "Joke";
}
