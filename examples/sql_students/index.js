const Sequelize = require('sequelize')

//sequelize docs

//Create new instance of Sequelize with a connection string
// postgres://user:password@domain:port/dbname
const con = new Sequelize(`
  postgres://postgres:postgres@localhost:5432/students
  `)

//envoke connection to server and login
con.authenticate().then(() => {
  console.log('Connected!!')
}).catch(err => {
  console.error('connection failed: ', err)
})

//Define SCHEMA / Model
// coincidence user is same, one is variable other is table name (db will pluralize)
const User = con.define('user', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING},
})

// Sync schema to db (like rails db:migrate)
// The force: true makes it recreate db each time.
// Otherwise would do nothing as already exists. Tryi it.
User.sync({ force: true }).then((promiseValue) => {
  console.log('Schema created!')
  return User.create({
    firstName: 'John',
    lastName: 'Smith',
  })
}).then(() => {
  User.findAll().then((users) => {
    console.log(users)
  })
})
