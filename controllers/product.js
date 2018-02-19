'use strict'


const Product = require('../models/product')

function getProduct(req, res) {
  let productId = req.params.productId
  Product.findById(productId, (err, product) => {
    //if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if(err) res.status(500).send({message: `Error al realizar la petición: ${err}`})
    //if (!product) return res.status(404).send({message: `El producto no existe`})
    if (!product) res.status(404).send({message: `El producto no existe`})
    res.status(200).send({ product })

  })
}

function getProducts(req, res) {
  Product.find({}, (err, products) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!products) return res.status(404).sed({message: `No existen productos`})
    //res.send(200, { products })
    res.status(200).send({ products })
  })
}

function saveProduct(req, res) {
  console.log('POST /api/product')
  console.log(req.body)

  let product = new Product()
  product.name = req.body.name
  product.picture = req.body.picture
  product.price = req.body.price
  product.category = req.body.category
  product.descripction = req.body.descripction

  product.save((err, productStored) => {
    if(err) res.status(500).send({message: `Error al intentar guardar: ${err}`})
    res.status(200).send({product: productStored})
  })
}

function updateProduct(req, res) {
  let productId = req.params.productId
  let update = req.body
    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
      if(err) return res.status(500).send({message: `Error al actualizar: ${err}`})
      res.status(200).send({ product: productUpdated})
    })
}

function deleteProduct(id) {
  let productId = req.params.productId
  Product.findById(productId, (err, product) => {

    if (err) res.status(500).send({ message: `Error al borrar producto: ${err}` })
    product.remove(err => {
        if (err) res.status(500).send({ message: `Error al borrar producto: ${err}` })
        res.status(200).send({message: `El producto ha sido eliminado`})
    })

  })
}


module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}
