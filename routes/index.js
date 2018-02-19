'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product', ProductCtrl.getProducts)
api.get('/product/:productId', ProductCtrl.getProduct)
api.put('/product/:productId', ProductCtrl.updateProduct)
api.post('/product', ProductCtrl.saveProduct)
api.delete('/product/:productId', ProductCtrl.deleteProduct)
api.post('/signup', userCtrl.signUp)
api.post('/signip', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: `Tienes Acceso` })
})

module.exports = api
