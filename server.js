function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getJoke () {
  var jokeToTell = getRandomIntInclusive(1, 3)
  console.log(jokeToTell)
  if (jokeToTell === 1) {
    return '<p>Knock knock.</p><p>Who\'s there?</p><p>Beats.</p><p>Beats who?</p><p>Beats me.</p>'
  } else if (jokeToTell === 2) {
    return 'Knock knock.</p><p>Who’s there?</p><p>The interrupting cow.</p><p>Interrupting cow wh-</p><p>Moooooo!</p>'
  } else {
    return 'Knock, knock!</p><p>Who’s there?</p><p>Opportunity!</p><p>That is impossible.</p><p>Opportunity doesn’t come knocking twice!</p>'
  }
}
// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says 'Hi!!' at every route
var server = http.createServer(function (request, response) {
  var message = '<h1>Jacob\'s Web Server</h1>'
  if (request.url === '/') {
    message += '<p>Welcome to the server</p>'
    message += '<ul>'
    message += '<li><a href="/random-joke">Random Joke</a></li>'
    message += '<li><a href="/cuteness">Cuteness</a></li>'
    message += '<li><a href="/bad-page">Bad Page</a></li>'
  } else if (request.url === '/random-joke') {
    var joke = getJoke()
    message += '<p><a href="/">Homepage</a></p>'
    message += '<p>' + joke + '</p>'
  } else if (request.url === '/cuteness') {
    message += '<p><a href="/">Homepage</a></p>'
    message += '<p><img src="http://i.upworthy.com/nugget/57ee80d644c6d1001b00005c/attachments/ComedyAnimalPhotos1-6c824d975bf9f10caad0e001eefa0d8a.jpg" />'
  } else {
    message += '<p><a href="/">Homepage</a></p>'
    message += request.url + ' was abducted by aliens... ops.'
  }
  response.end(message)
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at' + http + port + '/')
