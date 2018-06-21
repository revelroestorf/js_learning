const Sequelize = require('sequelize')
const sequelize = new Sequelize('ecommerce', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false
});

const Order = sequelize.define('order', {
  email: Sequelize.STRING,
  currency: Sequelize.STRING,
})

const Product = sequelize.define('product', {
  title: Sequelize.STRING,
  price: Sequelize.INTEGER
})

const Image = sequelize.define('image', {
  url: Sequelize.STRING
})

Order.hasMany(Product)
Product.hasMany(Image)

sequelize.sync()

module.exports = { Order, Product, Image }
