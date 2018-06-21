const express = require('express')

const { Order, Product, Image } = require('./db')

const app = express()

app.get('/api/orders', async (req, res) => res.send(await Order.all()))
app.get('/api/orders/:id', async (req, res) => res.send(await Order.findById(req.params.id)))

app.get('/api/products', async (req, res) => res.send(await Product.all()))
app.get('/api/products/:id', async (req, res) => res.send(await Product.findById(req.params.id)))

app.get('/api/images', async (req, res) => res.send(await Image.all()))
app.get('/api/images/:id', async (req, res) => res.send(await Image.findById(req.params.id)))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3001, () => console.log('Example app listening on port 3001!'))
