//  npm init
//  npm install --save sequelize
//  npm install --save pg pg-hstore
//  atom index.js
//  node index
// npm install --save body-parser

const Sequelize = require('sequelize')

//sequelize docs

//Create new instance of Sequelize with a connection string
// postgres://user:password@domain:port/dbname
const con = new Sequelize('postgres://postgres:postgres@localhost:5432/students')

//envoke connection to server and login
con.authenticate().then(() => {
  console.log('Connected!!').then(() => {
  })
}).catch(err => {
  console.error('connection failed: ', err)
})
//Define SCHEMA / Model
// coincidence user is same, one is variable other is table name (db will pluralize)
const Bookmark = con.define('bookmark', {
  url: { type: Sequelize.STRING },
  title: { type: Sequelize.STRING },
})

// Can also put this all in a separate file - SEED FILE!!!
// Sync schema to db (like rails db:migrate)
// The force: true makes it recreate db each time.
// force: true will drop the table if it already exists
// Otherwise would do nothing as already exists. Tryi it.
  Bookmark.sync({force: true}).then(() => {
    // Table created
    Bookmark.create({
      url: 'http://google.com',
      title: 'Google'
    })
    Bookmark.create({
      url: 'http://wikipedia.org',
      title: 'Wikipedia'
    })
    Bookmark.create({
      url: 'http://github.com',
      title: 'Github'
    })
  });

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3333, () => console.log('Example app listening on port 3000!'))

app.get('/bookmarks/:id', (req, res) => {
  // Bookmark.findAll().then((value) => {
  Bookmark.findById(req.params.id).then((value) => {
    res.json(value)
  })
})
