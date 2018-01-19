var express = require('express')
var app = express()
var router = express.Router()
var sandwichData = require('./data.json')

var breadArray = sandwichData.sandwich[0]
var proteinArray = sandwichData.sandwich[1]
var cheeseArray = sandwichData.sandwich[2]
var vegArray = sandwichData.sandwich[3]
// var obj={id: [req.params.breadid, 
//               req.params.breadid, 
//               req.params.breadid, 
//               req.params.breadid]
// }

module.exports = router

router.get('/', function (req, res) {
  res.redirect('/sandwich/home')
})

router.get('/sandwich/home', function (req, res) {
  res.render('sandwich/home')
})

//choose bread
router.get('/sandwich/builder', function (req, res) {
  var baseURL = req.path
  console.log(req.path)
  res.render('sandwich/builder', { ingredientArray: breadArray, baseURL: baseURL })
})

//choose protein
router.get('/sandwich/builder/:id', function (req, res) {
  var baseURL = req.path
  res.render('sandwich/builder', { ingredientArray: proteinArray, baseURL: baseURL })
})
//choose cheese
router.get('/sandwich/builder/:id/:id', function (req, res) {
  var baseURL = req.path
  res.render('sandwich/builder', { ingredientArray: cheeseArray, baseURL: baseURL })
})

//choose veg
router.get('/sandwich/builder/:id/:id/:id', function (req, res) {
  var baseURL = req.path
  res.render('sandwich/builder', { ingredientArray: vegArray, baseURL: baseURL })
})

//final
router.get('/builder/:bread_id/:cheese_id/:protein_id/:veg_id', function (req, res) {
  var breadId = req.params.bread_id
  var cheeseId = req.params.cheese_id
  var proteinId = req.params.protein_id
  var vegId = req.params.veg_id

  var objSandwich = {id: [breadId, cheeseId, proteinId, vegId]}

  console.log(objSandwich.id)

  res.render('sandwich/final', objSandwich)
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
