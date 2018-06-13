const express = require('express')
const _ = require('underscore')
const bodyParser = require('body-parser')
const students = require('./students')
const resturants = require('./resturants')

const app = express()

app.use(bodyParser.json())

/* Landing page */
app.get('/', (req, res) => {
  // Use underscore to get two random students
  const randomStudents = _.sample(students, 3);
  const randomResturants = _.sample(resturants, 1);
  res.send(
    `<h1>Lunchify</h1>
    <p>Matched: ${randomStudents[0]} with ${randomStudents[1]}</p>
    <p>Matched: ${randomResturants[0]}</p>`
  )
})

/* API endpoints */
app.get('/api/students', (req, res) => {
  console.log('Getting a list of students')
  res.json(students)
})

app.get('/api/resturants', (req, res) => {
  console.log('Getting all resturants')
  res.json(resturants)
})

app.post('/api/students', (req, res) => {
  const newStudent = req.body.student
  console.log('Adding a new student:', newStudent)
  students.push(newStudent)
  res.json(newStudent)
})

app.post('/api/resturants', (req, res) => {
  const newResturant = req.body.key
  console.log('adding new resturant:', newResturant)
  resturants.push(newResturant)
  res.json(resturants)
})


app.listen(3000, () => console.log('Server running at http://localhost:3000/'))
