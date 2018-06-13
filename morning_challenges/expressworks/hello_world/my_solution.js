const express = require('express')
const app = express()
app.get('/home', (req, res) => {
  res.end('Hello world')
})
