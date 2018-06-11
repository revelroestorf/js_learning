const http = require('http')
const url = require('url')


//create server and configure
const server = http.createServer((req, res) => {

// Write to response header. 200 = OK. content type so can read html below..
  res.writeHead(200, {
    'content-Type': 'text/html'
  })
  if (req.url === '/hello') {
  res.write('Hello from our server!')
  } else if (req.url === '/pork') {
    if (req.method === 'GET') {
      res.write('<h1>GET Chop!</h1>')
    } else if (req.method === 'POST') {
      res.write('<h1>POST Chop!</h1>')
      }
    }

  res.end()
  // Sends response to browser

})

// run server
server.listen(4321)
console.log('Server listening at 4321')
