/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/
const express = require('express')
const router = express.Router()

//views
const views = require('./views')

router.route('/')
    .get(views.getEmployees)
    .post(views.addEmployee)

router.route('/:id')
    .patch(views.editEmployee)
    .delete(views.deleteEmployee)

module.exports = router