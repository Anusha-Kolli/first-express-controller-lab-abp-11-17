var express = require('express')

var controller = require('./controllers/SiteController.js')
var app = express()

app.get('/',controller.Index)
app.get('/',controller.About)
app.get('/',controller.Contact)



module.exports = app
