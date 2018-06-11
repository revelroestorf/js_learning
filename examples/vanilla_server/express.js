const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('Home page!'))

app.get('/hello', (req, res) => res.send('<h1>Hello!</h1>'))

//or send a file:
app.get('/file', (req, res) => res.sendFile('test.html', {root: __dirname }))

app.post('/hello', (req, res) => res.send('You posted to hello!'))

//to take params entered into url and output to html..
app.get('/hello/:name', (req, res) =>
  res.send(`<h2>Hello, ${req.params.name}!!`)
)

app.listen(4321, () => console.log('Express is listening on 4321'))
