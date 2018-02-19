'use strict'


const Company = require('../models/company')

function getCompany(req, res) {
  let companyId = req.params.companyId
  Company.findById(companyId, (err, company) => {
    if(err) res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!company) res.status(404).send({message: `El cliente no existe`})
    res.status(200).send({ company })

  })
}

function getCompanies(req, res) {
  Company.find({}, (err, companies) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!companies) return res.status(404).sed({message: `No existen resgistros`})
    res.status(200).send({ companies })
  })
}

function saveCompany(req, res) {
  console.log('POST /api/company')
  console.log(req.body)

  let company = new Company()
  company.name = req.body.name
  company.picture = req.body.picture
  company.ruc = req.body.ruc
  company.mail = req.body.mail
  company.phone = req.body.phone
  company.cellphone = req.body.celphone
  company.address = req.body.address
  company.city = req.body.city
  company.country = req.body.country

  company.save((err, companyStored) => {
    if(err) res.status(500).send({message: `Error al intentar guardar: ${err}`})
    res.status(200).send({company: companyStored})
  })
}

function updateCompany(req, res) {
  let companyId = req.params.companyId
  let update = req.body
    company.findByIdAndUpdate(companyId, update, (err, companyUpdated) => {
      if(err) return res.status(500).send({message: `Error al actualizar: ${err}`})
      res.status(200).send({ company: companyUpdated})
    })
}

function deleteCompany(id) {
  let companyId = req.params.companyId
  company.findById(companyId, (err, company) => {

    if (err) res.status(500).send({ message: `Error al borrar registro: ${err}` })
    company.remove(err => {
        if (err) res.status(500).send({ message: `Error al borrar registro: ${err}` })
        res.status(200).send({message: `El registro ha sido eliminado`})
    })

  })
}


module.exports = {
  getCompany,
  getCompanies,
  saveCompany,
  updateCompany,
  deleteCompany
}
