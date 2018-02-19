'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CompanySchema = Schema ({
  name: String,
  picture: String,
  ruc: String,
  mail: String,
  phone: String,
  cellphone: String,
  address: String,
  city:String,
  country:String
})

module.exports = mongoose.model('Company', CompanySchema)
