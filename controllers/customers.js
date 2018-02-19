'use strict'


const Customer = require('../models/customer')

function getCustomer(req, res) {
  let customerId = req.params.customerId
  Customer.findById(customerId, (err, customer) => {
    if(err) res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!customer) res.status(404).send({message: `El cliente no existe`})
    res.status(200).send({ customer })

  })
}

function getCustomers(req, res) {
  Customer.find({}, (err, customers) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!customers) return res.status(404).sed({message: `No existen productos`})
    res.status(200).send({ customers })
  })
}

function saveCustomer(req, res) {
  console.log('POST /api/customer')
  console.log(req.body)

  let customer = new Customer()
  customer.name = req.body.name
  customer.picture = req.body.picture
  customer.ruc = req.body.ruc
  customer.mail = req.body.mail
  customer.phone = req.body.phone
  customer.cellphone = req.body.celphone
  customer.address = req.body.address
  customer.city = req.body.city

  product.save((err, customerStored) => {
    if(err) res.status(500).send({message: `Error al intentar guardar: ${err}`})
    res.status(200).send({customer: customerStored})
  })
}

function updateCustomer(req, res) {
  let customerId = req.params.customerId
  let update = req.body
    Product.findByIdAndUpdate(customerId, update, (err, customerUpdated) => {
      if(err) return res.status(500).send({message: `Error al actualizar: ${err}`})
      res.status(200).send({ product: customerUpdated})
    })
}

function deleteCutomer(id) {
  let customerId = req.params.customerId
  Product.findById(customerId, (err, customer) => {

    if (err) res.status(500).send({ message: `Error al borrar producto: ${err}` })
    customer.remove(err => {
        if (err) res.status(500).send({ message: `Error al borrar producto: ${err}` })
        res.status(200).send({message: `El producto ha sido eliminado`})
    })

  })
}


module.exports = {
  getCustomer,
  getCustomers,
  saveCustomer,
  updateCustomer,
  deleteCustomer
}
