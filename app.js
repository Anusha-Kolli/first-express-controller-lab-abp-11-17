var express = require('express')

var controller = require('./controllers/SiteController.js')
var app = express()

app.get('/',controller.index)
app.get('/',controller.about)
app.get('/',controller.contact)



module.exports = app
