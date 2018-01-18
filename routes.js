var express = require('express')
var app = express()
var router = express.Router()
var sandwichData = require('./testdata.json')
// var fs = require('fs')

module.exports = router

router.get('/', function (req, res) {
  res.redirect('/sandwich/home')
})

router.get('/sandwich/home', function (req, res) {
  res.render('sandwich/home', //data)
)
})

//choose bread
router.get('sandwich/builder', function (req, res) {

  res.render('sandwich/builder', //data)
)

})

//choose cheese
router.get('/builder/:id', function (req, res) {

  res.render('sandwich/builder', //data)
)
})

//choose protein
router.get('/builder/:id/:id', function (req, res) {

  res.render('sandwich/builder', //data)
)
})


//choose veg
router.get('/builder/:id/:id/:id', function (req, res) {

  res.render('sandwich/builder', //data)
)
})

//final
router.get('/builder/:id/:id/:id/:id', function (req, res) {

  res.render('sandwich/final', //data)
)
})





// router.get('/puppies', function (req, res) {
//   res.render('puppies/index', puppyData)
// })

// router.get('/puppies/:id', function (req, res) {
//   var idx = req.params.id - 1
//   var puppyObj = puppyData.puppies[idx]
//   puppyObj['updated'] = req.query.updated === 'true'
//   res.render('puppies/view', puppyObj)
// })

// router.get('/puppies/edit/:id', function (req, res) {
//   var idx = req.params.id - 1
//   var puppyObj = puppyData.puppies[idx]
//   res.render('puppies/edit', puppyObj)
// })

// router.post('/puppies/edit/:id', function (req, res) {
//   var idx = req.params.id - 1
//   puppyData.puppies[idx] = req.body
//   fs.writeFile(__dirname + '/data.json', JSON.stringify(puppyData), (err) => {
//     if (err) console.log(err)
//   })
//   res.redirect('/puppies/' + req.params.id + '/?updated=true')

// })
