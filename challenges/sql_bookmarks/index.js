//  npm init
//  npm install --save sequelize
//  npm install --save pg pg-hstore
//  atom index.js
//  node index

const Sequelize = require('sequelize')

//sequelize docs

//Create new instance of Sequelize with a connection string
// postgres://user:password@domain:port/dbname
const con = new Sequelize('postgres://postgres:postgres@localhost:5432/students')

//envoke connection to server and login
con.authenticate().then(() => {
  console.log('Connected!!')
}).catch(err => {
  console.error('connection failed: ', err)
})

//Define SCHEMA / Model
// coincidence user is same, one is variable other is table name (db will pluralize)
const Bookmark = con.define('bookmark', {
  url: { type: Sequelize.STRING },
  title: { type: Sequelize.STRING },
})


// Sync schema to db (like rails db:migrate)
// The force: true makes it recreate db each time.
// Otherwise would do nothing as already exists. Tryi it.
Bookmark.sync().then(() => {
  console.log('Schema created!')
  return Bookmark.create(
    { url: 'https://www.khanacademy.org/computing/computer-programming/sql/sql-basics/v/welcome-to-sql',
      title: 'SQL Intro' },
    { url: 'http://docs.sequelizejs.com/',
      title: 'Sequelize'}
  )
}).then(() => {
  Bookmark.findAll().then((bookmarks) => {
    console.log(bookmarks)
  })
})
