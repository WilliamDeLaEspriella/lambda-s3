'use strict'

const {create} = require('../controllers/contacts')

module.exports = app => {

    app.get('/contacts', create)

};