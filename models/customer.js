'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CustomerSchema = Schema ({
  name: String,
  picture: String,
  ruc: String,
  mail: String,
  phone: String,
  cellphone: String,
  address: String,
  city:String
})

module.exports = mongoose.model('Customer', CustomerSchema)
