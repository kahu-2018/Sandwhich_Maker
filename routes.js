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
  //var breadData = breadArray
  res.render('sandwich/builder', breadData)
})

//choose cheese
router.get('/builder/:bread_id', function (req, res) {
  var breadId = req.params.bread_id
  var obj = breadArray.find(function(item) {
        return breadId == item.id 
})
    res.render('sandwich/builder', obj)
})

//choose protein
router.get('/builder/:bread_id/:cheese_id', function (req, res) {
  var cheeseId = req.params.cheese_id
  var obj = cheeseArray.find(function(item) {
        return cheeseId == item.id 
})
    res.render('sandwich/builder', obj)
})


//choose veg
router.get('/builder/:bread_id/:cheese_id/:protein_id', function (req, res) {
  var proteinId = req.params.protein_id
  var protein = proteinArray.find(function(item) {
        return proteinId == item.id
  })
  res.render('sandwich/builder', protein)
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
