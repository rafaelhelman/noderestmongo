'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const CompanyCtrl = require('../controllers/company')
const CustomerCtrl = require('../controllers/customer')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product', ProductCtrl.getProducts)
api.get('/product/:productId', ProductCtrl.getProduct)
api.put('/product/:productId', ProductCtrl.updateProduct)
api.post('/product', ProductCtrl.saveProduct)
api.delete('/product/:productId', ProductCtrl.deleteProduct)

api.get('/company', CompanyCtrl.getCompanies)
api.get('/company/:companyId', CompanyCtrl.getCompany)
api.put('/company/:companyId', CompanyCtrl.updateCompany)
api.post('/company', CompanyCtrl.saveCompany)
api.delete('/company/:companyId', CompanyCtrl.deleteCompany)

api.get('/customer', CustomerCtrl.getCustomers)
api.get('/customer/:customerId', CustomerCtrl.getCustomer)
api.put('/customer/:customerId', CustomerCtrl.updateCustomer)
api.post('/customer', CustomerCtrl.saveCustomer)
api.delete('/customer/:customerId', CustomerCtrl.deleteCustomer)

api.post('/signup', userCtrl.signUp)
api.post('/signip', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: `Tienes Acceso` })
})

module.exports = api
