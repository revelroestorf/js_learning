const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(session({
  secret: 'foobarbat',
  resave: false,
  saveUninitialized: false
}))

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/secure/welcome', (req, res) => {
  if (req.session.loggedIn) {
    res.write('<h1>Secure page!</h1>')
    res.write(`
      <form action="/auth/logout">
        <button type="submit">Logout</button>
      </form>
      `)
  } else {
    res.write('401')
  }
  res.send()
})

app.get('/secure/dog', (req, res) => {
  if (req.session.loggedIn) {
    // res.sendFile('dog.jpeg', {root: __dirname })
    res.send(`
      <img src="/dog.jpeg"></img>
      <form action="/auth/logout">
        <button type="submit">Logout</button>
      </form>
      `)
  } else {
    res.send(`401
      `)
  }
})

app.get('/auth/login', (req, res) => {
  res.send(`
    <form method="post">
      <p>Email</p>
      <input name="email"></input>
      <p>Password</p>
      <input name="password"></input>
      <button type="submit">Login</button>
    </form>
    `)
})

app.post('/auth/login', (req, res) => {
  if (req.body.email === 'admin@admin.com' && req.body.password === 'password123') {
    req.session.loggedIn = true
    res.redirect('/secure/dog')
  } else {
    res.send(`
      <h3>try again</h3>
      <form method="post">
        <p>Email</p>
        <input name="email"></input>
        <p>Password</p>
        <input name="password"></input>
        <button type="submit">Login</button>
      </form>
      `)
  }
})

app.get('/auth/logout', (req, res) => {
  req.session.loggedIn = false
  res.send("You've logged out")
})

app.listen(4444)
