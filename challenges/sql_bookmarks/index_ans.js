const Sequelize = require('sequelize')

const con = new Sequelize('postgres://postgres:postgres@localhost:5432/bookmarks');

con
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }).then(() => {
    const Bookmark = con.define('bookmark', {
      url: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      }
    });

    // force: true will drop the table if it already exists
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

    app.listen(3333, () => console.log('Example app listening on port 3333!'))

    app.get('/bookmarks', (req, res) => {
      Bookmark.findAll().then((value) => {
        res.json(value)
      })
    })

    app.get('/bookmarks/:id', (req, res) => {
      Bookmark.findById(req.params.id).then((value) => {
        res.json(value)
      })
    })

  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
