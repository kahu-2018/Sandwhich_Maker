 var express = require('express')
// var hbs = require('express-handlebars')
// var bodyParser = require('body-parser')
var app = express()
 module.exports = app
//
// // Middleware
// app.engine('hbs', hbs({
//   defaultLayout: 'main',
//   extname: 'hbs'
// }))
// app.set('view engine', 'hbs')
// app.use(express.static('public'))
// app.use(bodyParser.urlencoded({ extended: false }))
//
//
//
// app.use(routes)
app.get('/sand-which.git', function(req, res){
  res.send('hello world')
})
